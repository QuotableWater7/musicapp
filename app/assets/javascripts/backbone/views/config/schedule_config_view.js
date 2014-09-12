(function () {
  'use strict';

  App.Views.ScheduleConfigView = Backbone.View.extend({
    template: _.template($('#schedule_config_template').html()),

    initialize: function () {

    },

    render: function () {
      this.$el.html(this.template());

      return this;
    }
  });
})();
