(function () {
  'use strict';

  var ScheduleItems = Backbone.Collection.extend({
    model: App.Models.ScheduleItem,
    url: '/schedule_items'
  });

  App.Collections.ScheduleItems = ScheduleItems;
})();
