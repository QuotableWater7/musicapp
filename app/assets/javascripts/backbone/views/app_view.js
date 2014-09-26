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
          new App.Views.TabsView({
            collection: new App.Collections.Tabs(),
            el: '.view'
          });
          break;
        case 'visualization':
          new App.Views.VisualizationView({ el: '.view' });
          break;
        case 'scheduler':
          new App.Views.ScheduleView({
            model: new App.Models.Schedule({ id: 1 }),
            el: '.view'
          });
          break;
        case 'config':
          new App.Views.ConfigView({ el: '.view' });
          break;
      }
    },
  });
})();
