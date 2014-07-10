//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.MusicApp = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  run: function () {
    var view = new this.Views.TabView();
    view.render();
  }
};
