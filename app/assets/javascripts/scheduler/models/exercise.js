(function () {
  'use strict';

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      name: '[edit]',
      importance: 50
    },

    initialize: function () {
      App.events.subscribe('exercise.' + this.cid + '.set', this.set.bind(this));
      this.on('change add', function () { this.save(); }.bind(this));
    },

    exercisesPath: function () {
      return '/schedules/' + this.get('schedule_id') + '/exercises';
    },

    exercisePath: function () {
      return this.exercisesPath() + '/' + this.get('id');
    },

    url: function (method) {
      method = method.toLowerCase();
      if (method === 'update' || method === 'delete') {
        return this.exercisePath();
      } else {
        return this.exercisesPath();
      }
    },

    sync: function(method, model, options) {
      options = options || {};
      options.url = model.url.call(this, method);

      return Backbone.sync.apply(this, arguments);
    },

    toJSON: function () {
      var json = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(json, { cid: this.cid });
    },

    setters: {
      importance: function (importance) {
        return parseInt(importance);
      }
    }

  });

})();
