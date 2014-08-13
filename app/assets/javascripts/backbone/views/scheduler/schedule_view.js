(function () {
  'use strict';

  var schedule_index = 0;
  var schedule_items;
  var total_importance = 0;
  var total_time = 30 * 60;

  function timeScale() { return total_time / total_importance; }
  function hasNextActivity() { return schedule_index < schedule_items.length; }
  var timer;

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {
      'nextActivity': 'nextActivity'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.fetch({ success: this.render });
      timer = new App.Views.TimerView();
    },

    render: function () {
      var self = this;
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

      return this;
    },

    nextActivity: function () {
      if (schedule_items && hasNextActivity()) {
        var activity = schedule_items[schedule_index];
        var seconds = parseInt(activity.importance) * timeScale();

        timer.startCountdown(activity.name, { seconds: seconds });
        schedule_index++;
      }
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
