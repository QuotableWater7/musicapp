(function () {
  'use strict';

  App.Models.Schedule = Backbone.Model.extend({

    defaults: {
      current_view: 'config',
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
      exercises.on('add remove reset', function () {
        this.trigger('change');
      }.bind(this));

      exercises.fetch({ reset: true });
    },

    save: function () {
      this.get('exercises').each(function (exercise) { exercise.save(); });
      return Backbone.Model.prototype.save.apply(this, arguments);
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
      }
    }

  });

})();
