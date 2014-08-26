(function () {
  'use strict';

  var Schedule = Backbone.Model.extend({
    urlRoot: '/schedules'
  });

  App.Models.Schedule = Schedule;
})();
