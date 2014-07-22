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
      '.submit': 'render',
      'click .activity-switch': 'changeActivity'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template());
      this.$el.find('.slider-track').slider({ reversed: true });
    },

    render: function () {
      switch (current_activity) {
        case 'notes':
          this.notesExercise();
          break;
        case 'frets':
          this.fretsExercise();
          break;
      }
      return this;
    },

    changeActivity: function () {

    },

    notesExercise: function () {
      var random_string = Strings[Math.floor(Math.random()*Strings.length)];
      var random_fret = Frets[Math.floor(Math.random()*Frets.length)];
      this.$el.find('.display').text(random_string + random_fret);
    },

    fretsExercise: function () {

    }
  });

  App.Views.VisualizationView = VisualizationView;
})();
