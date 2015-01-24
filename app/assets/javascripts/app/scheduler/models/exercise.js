(function () {
  'use strict';

  App.Models.Exercise = Backbone.Model.extend({

    defaults: {
      activity: '',
      importance: 1
    },

    toJSON: function () {
      var json = Backbone.Model.prototype.toJSON.call(this);
      return _.extend(json, { cid: this.cid });
    }

  });

})();
