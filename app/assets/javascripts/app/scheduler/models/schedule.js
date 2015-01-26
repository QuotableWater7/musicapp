(function () {
  'use strict';

  App.Models.Schedule = Backbone.Model.extend({

    url: function () { return '/schedules/' + this.get('id'); },

    initialize: function (opts) {
      this.set(opts.schedule);
      this.set('exercises', this._loadExercises());
    },

    _loadExercises: function () {
      return new App.Collections.Exercises({ schedule_id: this.get('id') });
    }

  });

})();
