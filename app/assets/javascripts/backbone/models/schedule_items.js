(function () {
  'use strict';

  App.Models.ScheduleItems = Backbone.Model.extend({
    defaults: {
      total_duration: 0
    },

    initialize: function (opts) {
      this.items_collection = new App.Collections.ScheduleItems({
        schedule_id: opts.schedule_id
      });
      this.items_collection.on('update', this.updateDuration);
    },

    updateDuration: function (event, duration) {
      this.total_duration = duration;
    }
  });
})();
