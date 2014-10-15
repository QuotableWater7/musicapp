(function () {
  'use strict';

  App.Views.ConfigView = Backbone.View.extend({
    template: _.template($('#config_template').html()),

    initialize: function () {
      this.$el.html(this.template());

      var model = new App.Models.Schedule({ id: 1 });
      var params = { el: this.$el.find('.schedule-list'), model: model };
      var view = new App.Views.ScheduleConfigView(params);
    },

    render: function () {
      return this;
    }
  });
})();
