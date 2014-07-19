//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

window.MusicApp = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  run: function () {
    var tabs_collection = new this.Collections.Tabs();
    var view = new this.Views.TabsView({ collection: tabs_collection });
  }
};
