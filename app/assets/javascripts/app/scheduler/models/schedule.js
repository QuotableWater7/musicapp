(function () {
  'use strict';

  App.Models.Schedule = Backbone.Model.extend({

    defaults: {
      current_view: 'config',
      notes: '',
      exercise_idx: 0
    },

    url: function () { return '/schedules/' + this.get('id'); },

    initialize: function () {
      App.events.subscribe('schedule.update', this.set.bind(this));
      this.initExercises();
    },

    initExercises: function () {
      var exercises = new App.Collections.Exercises([], { schedule_id: this.get('id') });
      this.set('exercises', exercises);

      // trigger change whenever exercises changes
      exercises.on('add remove reset change', function () {
        this.trigger('change');
      }.bind(this));

      exercises.fetch({ reset: true });
    },

    getters: {
      num_exercises: function () {
        return this.get('exercises').length;
      },

      total_importance: function () {
        var total = 0;
        this.get('exercises').each(function (exercise) {
          total += exercise.get('importance');
        });

        return total;
      },

      seconds: function () {
        return this.get('duration') * 60;
      }
    }

  });

})();
