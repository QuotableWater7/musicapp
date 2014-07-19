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
      }
    });
  },

  musicApp: function () {
    var tabs_collection = new this.Collections.Tabs();
    var view = new this.Views.TabsView({ collection: tabs_collection });
  },

  visualizationApp: function () {
    var visualization_view = new this.Views.VisualizationView();
    $('.view').empty().html(visualization_view.render().$el);
  }
};

window.App.run();
