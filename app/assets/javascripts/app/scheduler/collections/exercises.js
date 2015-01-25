(function () {
  'use strict';

  App.Collections.Exercises = Backbone.Collection.extend({

    model: App.Models.Exercise,

    url: function () { return '/schedules/2'; },

    initialize: function () {
      var self = this;
      this.id = 2;

      this.on('add', function (model) {
        model.on('remove', function () { self.remove(model); });
      });
    }

  });

})();
