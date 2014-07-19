//= require backbone/music_app
//= require backbone/visualization_app
//= require_self

$(document).ready(function () {
  'use strict';

  var $app_buttons = $('.app-list').find('.btn');

  $app_buttons.click(function (e) {
    var $target = $(e.target);

    switch ($target.data('app')) {
      case 'tabs':
        MusicApp.run();
        break;
      case 'visualization':
        VisualizationApp.run();
        break;
    }
  });
});
