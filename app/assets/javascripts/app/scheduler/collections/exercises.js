(function () {
  'use strict';

  App.Collections.Exercises = Backbone.Collection.extend({

    model: App.Models.Exercise,

    initialize: function () {
      var self = this;

      this.on('add', function (model) {
        model.on('remove', function () { self.remove(model); });
      });
    }

  });

})();
