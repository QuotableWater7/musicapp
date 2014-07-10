(function () {
  'use strict';

  var TabModel = Backbone.Model.extend({
    urlRoot: '/tabs',

    initialize: function () {

    }
  });

  MusicApp.Models.TabModel = TabModel;
})();
