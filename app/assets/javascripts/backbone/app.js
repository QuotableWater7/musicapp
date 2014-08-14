//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

//= require_self

$(document).ready(function () {
  'use strict';

  var $view = $('.view');

  // kickoff the app
  (function () {
    setButtonCallbacks();
    loadApp();
  })();

  function setButtonCallbacks() {
    var $app_buttons = $('.app-list').find('.btn-app');

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
    $view.empty().html(view.$el);
  }

  // apps below
  function tabApp() {
    new App.Views.HeaderView({
      title: 'My Tabs',
      description: 'Double click a cell to edit.'
    }).render();
    var collection = new App.Collections.Tabs();
    var view = new App.Views.TabsView({ collection: collection });

    loadView(view);
    App.Cookies.set('last-app', 'tabs');
  }

  function visualizationApp() {
    new App.Views.HeaderView({
      title: 'Visualization',
      description: 'Improve your knowledge of the fretboard.'
    }).render();
    var view = new App.Views.VisualizationView();

    loadView(view);
    App.Cookies.set('last-app', 'visualization');
  }

  function schedulerApp() {
    new App.Views.HeaderView({
      title: 'Practice Scheduler',
      description: 'Pick your areas of focus and start the timer.'
    }).render();

    // when implementing multiple schedules
    // var collection = new App.Collections.Schedules();
    // var view = new App.Views.SchedulesView({ collection: collection });
    var model = new App.Models.Schedule({ id: 1 });
    var view = new App.Views.ScheduleView({ model: model });

    $view.empty().html(view.$el);
    App.Cookies.set('last-app', 'scheduler');
  }

  function metronomeApp() {
    var view = new App.Views.MetronomeView();
    $('.footer-view').empty().append(view.render().$el);
  }
});
