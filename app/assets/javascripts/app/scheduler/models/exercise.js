(function () {
  'use strict';

  var activities = [
    'Scales',
    'Chords',
    'Strumming patterns',
    'Theory'
  ];

  function rand(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
  }

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      activity: '',
      importance: 1
    },

    initialize: function () {
      this.set({
        activity: activities[rand(0, 3)],
        importance: rand(1, 100)
      });
    },

    toJSON: function () {
      var json = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(json, { cid: this.cid });
    }

  });

})();
