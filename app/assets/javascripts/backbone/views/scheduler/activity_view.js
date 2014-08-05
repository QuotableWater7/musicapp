(function () {
  'use strict';

  var ActivityView = Backbone.View.extend({
    template: _.template($('#activity-view').html()),

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

  App.Views.ActivityView = ActivityView;
})();
