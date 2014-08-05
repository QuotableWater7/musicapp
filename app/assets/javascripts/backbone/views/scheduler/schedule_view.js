(function () {
  'use strict';

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#scheduler-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template);
    },

    render: function () {
      return this;
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
