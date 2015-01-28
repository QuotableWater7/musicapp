(function () {
  'use strict';

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      name: 'New Activity',
      importance: 5
    },

    methodToURL: {
      'read': this.exercisesPath(),
      'create': this.exercisesPath(),
      'update': this.schedulePath() + '/' + this.get('id'),
      'delete': this.exercisesPath()
    },

    sync: function(method, model, options) {
      console.log('bdlsbfgsd');
      options = options || {};
      options.url = model.methodToURL[method.toLowerCase()];

      return Backbone.sync.apply(this, arguments);
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
