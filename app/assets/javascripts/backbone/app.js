//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

//= require_self

$(document).ready(function () {
  'use strict';

  var $view;

  // kickoff the app
  (function () {
    setButtonCallbacks();
    loadApp();
  })();

  function setButtonCallbacks() {
    var $app_buttons = $('.app-list').find('.btn');

    $app_buttons.click(function (e) {
      var $target = $(e.target);

      switch ($target.data('app')) {
        case 'tabs':
          tabApp();
          break;
        case 'visualization':
          visualizationApp();
          break;
        case 'scheduler':
          schedulerApp();
          break;
      }
    });
  }

  function loadApp() {
    var last_app = App.Cookies.get('last-app');

    if (last_app) {
      switch(last_app) {
        case 'tabs':
          tabApp();
          break;
        case 'visualization':
          visualizationApp();
          break;
        case 'scheduler':
          schedulerApp();
          break;
      }
    } else { tabApp(); }  // default

    metronomeApp();
  }

  function loadView(view) {
    $view = $view || $('.view');
    $view.empty().html(view.render().$el);
  }

  // apps below
  function tabApp() {
    new App.Views.HeaderView({
      title: 'My Tabs',
      description: 'Double click a cell to edit.'
    }).render();
    var tabs_collection = new App.Collections.Tabs();
    var view = new App.Views.TabsView({ collection: tabs_collection });

    loadView(view);
    App.Cookies.set('last-app', 'tabs');
  }

  function visualizationApp() {
    new App.Views.HeaderView({
      title: 'Visualization',
      description: 'Improve your knowledge of the fretboard.'
    }).render();
    var visualization_view = new App.Views.VisualizationView();

    loadView(visualization_view);
    App.Cookies.set('last-app', 'visualization');
  }

  function schedulerApp() {
    new App.Views.HeaderView({
      title: 'Practice Scheduler',
      description: 'Pick your areas of focus and start the timer.'
    }).render();

    var progress_msg = 'Scheduler app is in progress...';
    loadView({ render: function () { return { $el: progress_msg }; } });
    App.Cookies.set('last-app', 'scheduler');
  }

  function metronomeApp() {
    var view = new App.Views.MetronomeView();
    $('.footer-view').empty().append(view.render().$el);
  }
});
