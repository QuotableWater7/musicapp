//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

//= require_self

(function () {
  run();

  var $view;

  function run() {
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
        case 'metronome':
          metronomeApp();
          break;
      }
    });

    metronomeApp();     // default is to run this app
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
  }

  function visualizationApp() {
    new App.Views.HeaderView({
      title: 'Visualization',
      description: 'Improve your knowledge of the fretboard.'
    }).render();
    var visualization_view = new App.Views.VisualizationView();

    loadView(visualization_view);
  }

  function schedulerApp() {
    new App.Views.HeaderView({
      title: 'Practice Scheduler',
      description: 'Pick your areas of focus and start the timer.'
    }).render();

    var progress_msg = 'Scheduler app is in progress...';
    loadView({ render: function () { return { $el: progress_msg }; } });
  }

  function metronomeApp() {
    new App.Views.HeaderView({
      title: 'Metronome',
      description: 'Pick a speed and practice!'
    }).render();

    var view = new App.Views.MetronomeView();
    loadView(view);
  }
})();
