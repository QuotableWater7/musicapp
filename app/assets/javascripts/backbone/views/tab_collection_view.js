(function () {
  'use strict';

  var TabsView = Backbone.View.extend({
    el: '.tab-app-container',
    template: _.template($('#tabs-view').html()),
    tab_views: [],

    events: {
      'click .add-tab': 'add'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.collection.fetch({ success: this.render });
    },

    render: function () {
      var self = this;
      this.$el.html('').append(this.template());
      var $tbody = self.$el.find('.tabs-table tbody');

      this.collection.each(function (tab) {
        var view = new MusicApp.Views.TabView({ model: tab });
        $tbody.prepend(view.render().$el);
        self.tab_views.push(view);
      });
    },

    // helpers
    add: function () {
      var $tbody = this.$el.find('.tabs-table tbody');
      var tab = new MusicApp.Models.Tab();
      this.collection.add(tab);
      var view = new MusicApp.Views.TabView({ model: tab });
      $tbody.prepend(view.render().$el);
      this.tab_views.push(view);
    },

    // remove: function (e) {
    //   var url = $(e.target).data('url');
    //   this.collection.remove(this.collection.getByUrl(url));
    //   this.render();
    // }
  });

  MusicApp.Views.TabsView = TabsView;
})();
