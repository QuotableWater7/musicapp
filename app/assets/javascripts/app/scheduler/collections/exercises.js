(function () {
  'use strict';

  App.Collections.Exercises = Backbone.Collection.extend({

    model: App.Models.Exercise,

    url: function () {
      return '/schedules/' + this.schedule_id + '/exercises';
    },

    initialize: function (opts) {
      this.schedule_id = opts.schedule_id;
      App.events.subscribe('exercise.destroy', this.remove.bind(this));
      App.events.subscribe('exercise.create', this.create.bind(this));
    },

    _destroyExercise: function (cid) {
      this.get(cid)
    }

  });

})();
