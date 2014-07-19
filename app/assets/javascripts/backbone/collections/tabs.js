(function () {
  'use strict';

  var Tabs = Backbone.Collection.extend({
    model: App.Models.Tab,
    url: '/tabs',
    getByUrl: function(url) {
      return this.filter(function (val) {
        return val.get('url') === url;
      });
    }
  });

  App.Collections.Tabs = Tabs;
})();
