(function () {
  'use strict';

  var Tabs = Backbone.Collection.extend({
    model: MusicApp.Models.Tab,
    url: '/tabs',
    getByUrl: function(url) {
      return this.filter(function (val) {
        return val.get('url') === url;
      });
    }
  });

  MusicApp.Collections.Tabs = Tabs;
})();
