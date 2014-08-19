(function () {
  'use strict';

  var ScheduleItems = Backbone.Collection.extend({
    model: App.Models.ScheduleItem,
    url: '/schedule_items',

    initialize: function (opts) {
      this.schedule_id = opts.schedule_id;
    },

    fetch: function (opts) {
      var opts = opts || {};
      opts.url = this.url + '?schedule_id=' + this.schedule_id;

      return Backbone.Collection.prototype.fetch.call(this, opts);
    },
  });

  App.Collections.ScheduleItems = ScheduleItems;
})();
