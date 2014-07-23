//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

//= require_self

(function () {
  run();

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
      }
    });

    tabApp();     // default is to run this app
  }

  function tabApp() {
    new App.Views.HeaderView({
      title: 'My Tabs',
      description: 'Double click a cell to edit.'
    }).render();
    var tabs_collection = new App.Collections.Tabs();
    var view = new App.Views.TabsView({ collection: tabs_collection });
  }

  function visualizationApp() {
    new App.Views.HeaderView({
      title: 'Visualization',
      description: 'Improve your knowledge of the fretboard.'
    }).render();
    var visualization_view = new App.Views.VisualizationView();
    $('.view').empty().html(visualization_view.render().$el);
  }

  function schedulerApp() {
    new App.Views.HeaderView({
      title: 'Practice Scheduler',
      description: 'Pick your areas of focus and start the timer.'
    }).render();
    $('.view').empty().html('Scheduler app is in progress...');
  }
})();
