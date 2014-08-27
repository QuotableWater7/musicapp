(function () {
  'use strict';

  App.Models.ScheduleItems = Backbone.Model.extend({
    defaults: {
      importance: 0
    },

    initialize: function (opts) {
      _.bindAll(this, 'setImportance');

      this.items_collection = new App.Collections.ScheduleItems({
        schedule_id: opts.schedule_id
      });

      this.items_collection.on('load', this.setImportance);
    },

    setImportance: function () {
      this.importance = _.reduce(
        this.items_collection.models, 
        function (mem, schedule_item) {
          return mem + parseInt(schedule_item.get('importance'));
        },
        0
      );

      this.trigger('loadImportance');
    }
  });
})();
