(function () {
  'use strict';

  var schedule_index = 0;
  var schedule_items_model;
  var schedule_items;
  var total_importance = 0;
  var duration;
  var active = true;
  var timer;

  function itemsCollection() { return schedule_items_model.items_collection; }
  function scheduleAt(index) { return itemsCollection().at(index); }
  function timeScale() { return duration / total_importance; }
  function hasPrevActivity() { return schedule_index > 0; }
  function hasNextActivity() {
    return schedule_index < itemsCollection().size() - 1;
  }
  function getPrevActivity() { return scheduleAt(--schedule_index); }
  function getNextActivity() { return scheduleAt(++schedule_index); }
  function getCurrActivity() { return scheduleAt(schedule_index); }
  function loadActivity(activity) {
    window.a = schedule_items_model;
    var name = activity.get('name');
    var opts = { seconds: parseInt(activity.get('importance')) * timeScale() };

    timer.startCountdown(name, opts);
  }

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {
      'nextActivity': 'nextActivity',
      'click .prev-activity': 'prevActivity',
      'click .next-activity': 'nextActivity',
      'change .duration': 'save',
      'scheduleItemsLoaded': 'loadFirstActivity'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'loadFirstActivity');

      // load schedule data
      this.model = new App.Models.Schedule({ id: 1 });
      this.model.fetch({ success: this.render });

      // load schedule items data/view
      schedule_items_model = new App.Models.ScheduleItems({
        schedule_id: this.model.get('id')
      });

      schedule_items = new App.Views.ScheduleItemsView({
        collection: schedule_items_model.items_collection,
        $el: this.$el.find('.schedule-items')
      });

      // initialize the timer view
      timer = new App.Views.TimerView();
    },

    loadFirstActivity: function () {
      loadActivity(getCurrActivity());
    },

    render: function () {
      var json = this.model.toJSON();
      duration = json.duration * 60;
      timer.setBreakDuration(json.break_time);
      total_importance = json.total_importance;
      this.$el.html(this.template(json));
      this.$el.find('.schedule-timer').html(timer.$el);
      this.$el.find('.schedule-items').html(schedule_items.$el);

      return this;
    },

    enableDisableButtons: function () {
      if (hasNextActivity()) {
        this.$el.find('.next-activity').removeClass('disabled');
      } else {
        this.$el.find('.next-activity').addClass('disabled');
      }

      if (hasPrevActivity()) {
        this.$el.find('.prev-activity').removeClass('disabled');
      } else {
        this.$el.find('.prev-activity').addClass('disabled');
      }
    },

    prevActivity: function () {
      if (hasPrevActivity()) {
        loadActivity(getPrevActivity());
        this.enableDisableButtons();
      }
    },

    nextActivity: function () {
      if (hasNextActivity()) {
        loadActivity(getNextActivity());
        this.enableDisableButtons();
      }
    },

    disableEnter: function (e) {
      var keycode = (event.keyCode ? event.keyCode : event.which);

      if (keycode === 13) {
        e.preventDefault();
        $(e.target).blur();
      }
    },

    // TODO: better way to change between min/sec (or more consistent)
    save: function () {
      // get various parameters
      var name = this.$el.find('.name').text();
      var minutes = parseInt(this.$el.find('.duration option:selected').val());
      duration = minutes * 60;

      this.model.set({ duration: minutes, name: name });
      this.model.save();
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
