(function () {
  'use strict';

  var VisualizationView = Backbone.View.extend({
    template: _.template($('#visualization-view').html()),

    events: {

    },

    initialize: function () {
      this.$el.html(this.template());
    },

    render: function () {
      return this;
    }
  });

  App.Views.VisualizationView = VisualizationView;
})();
