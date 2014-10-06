(function () {
  'use strict';

  App.Views.AppView = Backbone.View.extend({
    template: _.template($('#app-view').html()),

    events: {
      'click .btn-app': 'loadApp'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'loadApp');
      this.$el.html(this.template);
      $('.footer-view').html(new App.Views.MetronomeView().render().$el);
    },

    render: function () { return this; },

    loadApp: function (e) {
      var $target = $(e.target);
      var app = $target.data('app');
      var view_name = app + 'View';

      new App.Views[view_name]({ el: '.view' });
    },
  });
})();
