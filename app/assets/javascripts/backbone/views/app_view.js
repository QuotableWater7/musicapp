(function () {
  'use strict';

  App.Views.AppView = Backbone.View.extend({
    template: _.template($('#app-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render', 'loadApp');
      this.$el.html(this.template);
      this.$el.find('.btn-app').click(this.loadApp);

      return this;
    },

    render: function () {
      return this;
    },

    loadApp: function (e) {
      var $target = $(e.target);

      switch ($target.data('app')) {
        case 'tabs':
          this.loadTabs();
          break;
        case 'visualization':
          alert();
          break;
        case 'scheduler':
          alert();
          break;
        case 'config':
          alert();
          break;
      }
    },

    loadTabs: function () {
      var collection = new App.Collections.Tabs();
      var view = new App.Views.TabsView({
        collection: collection,
        el: '.view'
      });
    },
  });
})();
