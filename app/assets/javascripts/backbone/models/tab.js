(function () {
  'use strict';

  var Tab = Backbone.Model.extend({
    urlRoot: '/tabs',
    defaults: {
      song: 'Song Name',
      artist: 'Artist Name',
      url: 'http://',
      sessions_completed: 0,
      total_minutes: 0
    }
  });

  MusicApp.Models.Tab = Tab;
})();
