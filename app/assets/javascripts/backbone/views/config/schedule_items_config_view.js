(function () {
  'use strict';

  App.Views.ScheduleItemsConfigView = Backbone.View.extend({
    template: _.template($('#schedule_items_config_template').html()),

    initialize: function () {

    },

    render: function () {
      this.$el.html(this.template());

      return this;
    }
  });
})();
