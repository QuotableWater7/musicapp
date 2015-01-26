(function () {
  'use strict';

  App.Collections.Exercises = Backbone.Collection.extend({

    model: App.Models.Exercise,

    url: function () { return '/exercises'; }

  });

})();
