(function () {
  'use strict';

  var Schedules = Backbone.Collection.extend({
    model: App.Models.Schedules,
    url: '/schedules'
  });

  App.Collections.Schedules = Schedules;
})();
