(function () {
  'use strict';

  var schedule_index;
  var schedule_items;
  var total_importance = 0;
  var total_time = 30 * 60;
  var active = true;
  var timer;

  function timeScale() { return total_time / total_importance; }
  function hasPrevActivity() { return schedule_index > 0; }
  function hasNextActivity() {
    return schedule_index < schedule_items.length - 1;
  }
  function getPrevActivity() { return schedule_items[--schedule_index]; }
  function getNextActivity() { return schedule_items[++schedule_index]; }
  function loadActivity(name, opts) {
    timer.startCountdown(name, opts);
  }

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {
      'nextActivity': 'nextActivity',
      'click .prev-activity': 'prevActivity',
      'click .next-activity': 'nextActivity'
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
        console.log(this.model);
        var json = this.model.toJSON();

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
        var activity = getPrevActivity();
        var seconds = parseInt(activity.importance) * timeScale();

        loadActivity(activity.name, { seconds: seconds });
        this.enableDisableButtons();
      }
    },

    nextActivity: function () {
      if (schedule_items && hasNextActivity()) {
        var activity = getNextActivity();
        var seconds = parseInt(activity.importance) * timeScale();

        loadActivity(activity.name, { seconds: seconds });
        this.enableDisableButtons();
      }
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
