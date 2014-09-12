(function () {
  'use strict';

  App.Views.ConfigView = Backbone.View.extend({
    template: _.template($('#config_template').html()),

    initialize: function () {

    },

    render: function () {
      var $el = this.$el;
      $el.html(this.template());

      var $schedule_config = $el.find('.schedule-config');
      var schedule_config_view = new App.Views.ScheduleConfigView();
      $schedule_config.html(schedule_config_view.render().$el);

      var $schedule_items_config = $el.find('.schedule-items-config');
      var schedule_items_config_view = new App.Views.ScheduleItemsConfigView();
      $schedule_items_config.html(schedule_items_config_view.render().$el);

      return this;
    }
  });
})();
