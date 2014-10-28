(function () {
  'use strict';

  App.Views.SchedulesView = Backbone.View.extend({
    template: _.template($('#schedules-view').html()),

    events: {},

    initialize: function () {
      _.bindAll(this, 'render');

      this.$el.html(this.template());
    },

    render: function () {

    }
   });
})();
