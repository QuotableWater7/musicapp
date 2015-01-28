(function () {
  'use strict';

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      name: 'New Activity',
      importance: 5
    },

    url: function () {
      var schedule_path = '/schedules/' + this.get('schedule_id');
      return schedule_path + '/exercises/' + this.get('id');
    },

    initialize: function () {
      App.events.subscribe('exercise.set', this.set.bind(this));
    },

    toJSON: function () {
      var json = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(json, { cid: this.cid });
    }

  });

})();
