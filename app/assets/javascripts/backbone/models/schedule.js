(function () {
  'use strict';

  var Schedule = Backbone.Model.extend({
    // TODO: pull this out once you've got multi schedules going
    // urlRoot: function () {
    //   if (this.isNew()) {
    //     return '/schedules';
    //   } else {
    //     return '/schedules/' + this.id;
    //   }
    // },
    urlRoot: '/schedules',

    defaults: {
      name: 'My First Schedule'
    },

    getActivities: function () {
      return ['activity 1', 'activity 2'];
    }
  });

  App.Models.Schedule = Schedule;
})();
