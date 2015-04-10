(function () {
  'use strict';

  App.Models.Schedule = Backbone.Model.extend({

    defaults: {
      current_view: 'config',
      exercise_idx: 0,
      exercise_time: 5 * 60
    },

    url: function () { return '/schedules/' + this.get('id'); },

    initialize: function () {
      App.events.subscribe('schedule.update', this.set.bind(this));
    }

  });

})();
