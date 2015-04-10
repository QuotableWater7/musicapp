(function () {
  'use strict';

  App.Models.Schedule = Backbone.Model.extend({

    defaults: { current_view: 'config' },

    url: function () { return '/schedules/' + this.get('id'); },

    initialize: function () {
      App.events.subscribe('schedule.update', this.set.bind(this));
    }

  });

})();
