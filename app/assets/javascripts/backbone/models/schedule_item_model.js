(function () {
  'use strict';

  var ScheduleItem = Backbone.Model.extend({
    urlRoot: '/schedule_items'
  });

  App.Models.ScheduleItem = ScheduleItem;
})();
