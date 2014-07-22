(function () {
  'use strict';

  var Strings = ['e', 'B', 'G', 'D', 'A', 'E'];
  var Frets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var SharpNotes = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
  ];
  var FlatNotes = [
    'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'
  ];

  var current_activity = 'note';

  var VisualizationView = Backbone.View.extend({
    template: _.template($('#visualization-view').html()),

    events: {
      '.submit': 'render'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template());
    },

    render: function () {
      var random_string = Strings[Math.floor(Math.random()*Strings.length)];
      var random_fret = Frets[Math.floor(Math.random()*Frets.length)];
      this.$el.find('.display h3').text(random_string + random_fret);

      return this;
    }
  });

  App.Views.VisualizationView = VisualizationView;
})();
