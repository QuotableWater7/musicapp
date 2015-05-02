(function () {
  'use strict';

  App.Collections.Exercises = Backbone.Collection.extend({

    model: App.Models.Exercise,

    url: function () {
      return '/schedules/' + this.schedule_id + '/exercises';
    },

    initialize: function (models, opts) {
      _.bindAll(this, '_createExercise', '_destroyExercise', '_resetFocus');

      this.schedule_id = opts.schedule_id;
      App.events.subscribe('exercise.destroy', this._destroyExercise);
      App.events.subscribe('exercise.create', this._createExercise);
      App.events.subscribe('exercises.resetFocus', this._resetFocus);
    },

    _createExercise: function (data) {
      data = _.extend({ schedule_id: this.schedule_id }, data);
      this.add(data);
    },

    _destroyExercise: function (cid) {
      this.get(cid).destroy();
    },

    _resetFocus: function () {
      this.each(function (exercise) { exercise.set('importance', 50); });
    }

  });

})();
