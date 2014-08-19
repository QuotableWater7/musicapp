(function () {
  'use strict';

  var schedule_index;
  var schedule_items;
  var total_importance = 0;
  var duration;
  var active = true;
  var timer;

  function timeScale() { return duration / total_importance; }
  function hasPrevActivity() { return schedule_index > 0; }
  function hasNextActivity() {
    return schedule_index < schedule_items.length - 1;
  }
  function getPrevActivity() { return schedule_items[--schedule_index]; }
  function getNextActivity() { return schedule_items[++schedule_index]; }
  function getCurrActivity() { return schedule_items[schedule_index]; }
  function loadActivity(activity) {
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
      'scheduleItemChange': 'setTotalImportance'
    },

    initialize: function () {
      _.bindAll(this, 'render');

      var schedule_items_collection = new App.Collections.ScheduleItems({
        schedule_id: this.model.get('id')
      });

      timer = new App.Views.TimerView();
      schedule_items = new App.Views.ScheduleItemsView({
        collection: schedule_items_collection
      });

      this.model.fetch({ success: this.render });
    },

    render: function () {
      var json = this.model.toJSON();

      duration = json.duration * 60;
      total_importance = json.total_importance;

      this.$el.html(this.template(json));
      this.$el.find('.schedule-timer').html(timer.render().$el);
      this.setDuration();

      return this;
    },

    setDuration: function () {
      var val = this.model.get('duration');
      this.$el.find('.duration option[value="' + val + '"]').attr('selected', 'true');
    },

    setTotalImportance: function () {
      total_importance = 0;

      _.each(schedule_items, function (item) {
        total_importance += parseInt(item.get('importance'));
      });

      loadActivity(getCurrActivity());
    },

    // loadScheduleItems: function (schedule_items_json) {
    //   var self = this;

    //   _.each(schedule_items_json, function (item) {
    //     var model = new App.Models.ScheduleItem(item);
    //     var item_view = new App.Views.ScheduleItemView({ model: model });
    //     schedule_items.push(model);

    //     self.$el.find('.schedule-table tbody').append(item_view.render().$el);
    //   });
    // },

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
      if (schedule_items && hasPrevActivity()) {
        loadActivity(getPrevActivity());
        this.enableDisableButtons();
      }
    },

    nextActivity: function () {
      if (schedule_items && hasNextActivity()) {
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

      loadActivity(getCurrActivity());
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
