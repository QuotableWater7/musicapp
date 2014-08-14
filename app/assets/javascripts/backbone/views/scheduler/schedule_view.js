(function () {
  'use strict';

  var schedule_index;
  var schedule_items;
  var total_importance = 0;
  var duration;
  var active = true;
  var timer;

  var save_timeout;

  function timeScale() { return duration / total_importance; }
  function hasPrevActivity() { return schedule_index > 0; }
  function hasNextActivity() {
    return schedule_index < schedule_items.length - 1;
  }
  function getPrevActivity() { return schedule_items[--schedule_index]; }
  function getNextActivity() { return schedule_items[++schedule_index]; }
  function getCurrActivity() { return schedule_items[schedule_index]; }
  function loadActivity(activity) {
    var name = activity.name;
    var opts = { seconds: parseInt(activity.importance) * timeScale() };

    timer.startCountdown(name, opts);
  }

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {
      'nextActivity': 'nextActivity',
      'click .prev-activity': 'prevActivity',
      'click .next-activity': 'nextActivity',
      'keydown .duration': 'disableEnter',
      'blur .duration': 'totalTimeUpdate'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.fetch({ success: this.render });
      timer = new App.Views.TimerView();
      schedule_index = -1;  // when nextActivity called, shifts to 0
    },

    render: function () {
      var self = this;

      if (this.model) {
        var json = this.model.toJSON();

        duration = json.duration * 60;
        schedule_items = json.schedule_items;
        this.$el.html(this.template(json));
        this.$el.find('.schedule-timer').html(timer.render().$el);

        total_importance = 0;

        _.each(schedule_items, function (item) {
          var model = new App.Models.ScheduleItem(item);
          var item_view = new App.Views.ScheduleItemView({ model: model });
          self.$el.find('.schedule-table tbody').append(item_view.render().$el);

          total_importance += parseInt(item.importance);
        });

        this.nextActivity();
      }

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

    totalTimeUpdate: function (e) {
      var self = this;

      clearTimeout(save_timeout);
      save_timeout = setTimeout(function () { self.save(); }, 500);
    },

    // TODO: better way to change between min/sec (or more consistent)
    save: function () {
      // get various parameters
      var minutes = parseInt(this.$el.find('.duration').text());
      duration = minutes * 60;

      // update the model
      this.model.set({ duration: minutes });
      this.model.save();

      // refresh current activity in case params changed
      loadActivity(getCurrActivity());
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
