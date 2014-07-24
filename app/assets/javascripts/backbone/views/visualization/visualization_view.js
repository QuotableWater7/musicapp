(function () {
  'use strict';

  var Strings = ['e', 'B', 'G', 'D', 'A', 'E'];
  var Frets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  var VisualizationView = Backbone.View.extend({
    template: _.template($('#visualization-view').html()),

    events: {
      '.submit': 'render'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template());
      // this.$el.find('.slider-track').slider({ reversed: true });
    },

    render: function () {
      var random_string = this.randomElement(Strings);
      var random_fret = this.randomElement(Frets);

      this.$el.find('.display').text(random_string + random_fret);

      return this;
    },

    randomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  });

  App.Views.VisualizationView = VisualizationView;
})();
