(function () {
  'use strict';

  var MetronomeView = Backbone.View.extend({
    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {


      return this;
    }
  });

  App.Views.MetronomeView = MetronomeView;
})();
