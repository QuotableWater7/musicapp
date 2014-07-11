(function () {
  'use strict';

  var TabsView = Backbone.View.extend({
    el: '.tab-app-container',
    tab_views: [],

    events: {
      'click .add-tab': 'add'
    },

    initialize: function () {
      var self = this;
      _.bindAll(this, 'render');

      this.collection.fetch({ success: self.render });
    },

    render: function () {
      var self = this;
      var template = _.template($('#tabs-view').html());
      $(this.el).html('').append(template);

      this.collection.each(function (tab) {
        var view = new MusicApp.Views.TabView({ model: tab });
        view.render();
        self.tab_views.push(view);
      });
    },

    // helpers
    add: function () {
      var tab = new MusicApp.Models.Tab();
      this.collection.add(tab);
      var view = new MusicApp.Views.TabView({ model: tab });
      view.render();
      this.tab_views.push(view);
    }
  });

  MusicApp.Views.TabsView = TabsView;
})();
