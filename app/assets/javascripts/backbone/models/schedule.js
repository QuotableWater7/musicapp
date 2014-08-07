(function () {
  'use strict';

  var Schedule = Backbone.Model.extend({
    urlRoot: '/schedules',
    defaults: {
      name: 'Schedule Default Title'
    },

    getActivities: function () {
      return ['activity 1', 'activity 2'];
    }
  });

  App.Models.Schedule = Schedule;
})();


(function () {
  'use strict';

  var Tab = Backbone.Model.extend({
    urlRoot: '/tabs',
    defaults: {
      song: 'Song Name',
      artist: 'Artist Name',
      url: 'http://',
      sessions_completed: 0,
      total_minutes: 0
    }
  });

  App.Models.Tab = Tab;
})();
