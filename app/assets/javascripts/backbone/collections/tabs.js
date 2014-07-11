(function () {
  'use strict';

  var Tabs = Backbone.Collection.extend({
    model: MusicApp.Models.Tab,
    url: '/tabs'
  });

  MusicApp.Collections.Tabs = Tabs;
})();
