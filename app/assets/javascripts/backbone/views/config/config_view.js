(function () {
  'use strict';

  App.Views.ConfigView = Backbone.View.extend({
    template: _.template($('#config_template').html()),

    initialize: function () {
      var $el = this.$el;
      $el.html(this.template());

      var model = new App.Models.Schedule({ id: 1 });
      var params = { el: '.schedule-list', model: model };
      new App.Views.ScheduleConfigView(params);
    },

    render: function () { return this; }
  });
})();
