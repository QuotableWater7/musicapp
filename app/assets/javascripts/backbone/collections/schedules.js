(function () {
  'use strict';

  var Schedules = Backbone.Collection.extend({
    model: App.Models.Schedule,
    url: '/schedules'
  });

  App.Collections.Schedules = Schedules;
})();
