(function () {
  'use strict';

  App.Views.AppView = Backbone.View.extend({
    template: _.template($('#app-view').html()),

    events: {
      'click .btn-app': 'loadApp'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'loadApp', 'renderApp', 'renderLastOpenApp');
      this.$el.html(this.template);
      this.renderLastOpenApp();
      $('.footer-view').html(new App.Views.MetronomeView().render().$el);
    },

    render: function () { return this; },

    loadApp: function (e) {
      var $target = $(e.target);
      var app = $target.data('app');
      var view_name = app + 'View';

      this.renderApp(view_name);
    },

    renderApp: function (view_name) {
      App.Cookies.set('last-app', view_name);
      new App.Views[view_name]({ el: '.view' });
    },

    renderLastOpenApp: function () {
      var last_app = App.Cookies.get('last-app');
      if (last_app) { this.renderApp(last_app); }
    }
  });
})();
