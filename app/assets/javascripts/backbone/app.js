//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

window.App = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  run: function () {
    var self = this;
    var $app_buttons = $('.app-list').find('.btn');

    $app_buttons.click(function (e) {
      var $target = $(e.target);

      switch ($target.data('app')) {
        case 'tabs':
          self.musicApp();
          break;
        case 'visualization':
          self.visualizationApp();
          break;
        case 'scheduler':
          self.schedulerApp();
          break;
      }
    });
  },

  musicApp: function () {
    new this.Views.HeaderView({
      title: 'My Tabs',
      description: 'Double click a cell to edit.'
    }).render();
    var tabs_collection = new this.Collections.Tabs();
    var view = new this.Views.TabsView({ collection: tabs_collection });
  },

  visualizationApp: function () {
    new this.Views.HeaderView({
      title: 'Visualization',
      description: 'Improve your knowledge of the fretboard.'
    }).render();
    var visualization_view = new this.Views.VisualizationView();
    $('.view').empty().html(visualization_view.render().$el);
  },

  schedulerApp: function () {
    new this.Views.HeaderView({
      title: 'Practice Scheduler',
      description: 'Pick your areas of focus and start the timer.'
    }).render();
    $('.view').empty().html('Scheduler app is in progress...');
  }
};

window.App.run();
