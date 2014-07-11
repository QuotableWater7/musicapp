(function () {
  'use strict';

  var TabCollection = Backbone.Collection.extend({
    model: MusicApp.Models.Tab
  });

  MusicApp.Collections.Tabs = Tabs;
})();
