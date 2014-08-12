(function () {
  'use strict';

  var schedule_index = 1;
  var schedule_items;
  var total_importance = 0;
  var total_time = 30 * 60;

  var timeScale = function () { return total_time / total_importance; };

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.fetch({ success: this.render });
    },

    render: function () {
      var self = this;
      var json = this.model.toJSON();

      schedule_items = json.schedule_items;
      this.$el.html(this.template(json));
      total_importance = 0;

      _.each(schedule_items, function (item) {
        var model = new App.Models.ScheduleItem(item);
        var item_view = new App.Views.ScheduleItemView({ model: model });
        self.$el.find('.schedule-table tbody').append(item_view.render().$el);

        total_importance += parseInt(item.importance);
      });

      this.loadTimer();

      return this;
    },

    loadTimer: function () {
      if (schedule_items) {
        var view = new App.Views.TimerView();
        this.$el.find('.schedule-timer').html(view.render().$el);

        var importance = parseInt(schedule_items[schedule_index].importance);
        view.startCountdown({ seconds: importance * timeScale() });
      }
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
