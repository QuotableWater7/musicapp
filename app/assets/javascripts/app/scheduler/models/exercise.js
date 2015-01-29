(function () {
  'use strict';

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      name: 'New Activity',
      importance: 5
    },

    initialize: function () {
      App.events.subscribe('exercise.' + this.cid + '.set', this.set.bind(this));
    },

    defaultPath: function () {
      return '/schedules/' + this.get('schedule_id') + '/exercises';
    },

    updatePath: function () {
      return this.defaultPath() + '/' + this.get('id');
    },

    url: function (method) {
      if (method.toLowerCase() === 'update') {
        return this.updatePath();
      } else {
        return this.defaultPath();
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
    }

  });

})();
