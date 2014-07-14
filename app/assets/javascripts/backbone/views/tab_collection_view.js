(function () {
  'use strict';

  var TabsView = Backbone.View.extend({
    el: '.tab-app-container',
    template: _.template($('#tabs-view').html()),

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
      this.$tbody = self.$el.find('.tabs-table tbody tr:last-child');

      this.collection.each(function (tab) {
        var view = new MusicApp.Views.TabView({ model: tab });
        self.$tbody.before(view.render().$el);
      });
    },

    // helpers
    add: function () {
      var tab = new MusicApp.Models.Tab();
      this.collection.add(tab);
      var view = new MusicApp.Views.TabView({ model: tab });
      this.$tbody.before(view.render().$el);
    },

    // remove: function (e) {
    //   var url = $(e.target).data('url');
    //   this.collection.remove(this.collection.getByUrl(url));
    //   this.render();
    // }
  });

  MusicApp.Views.TabsView = TabsView;
})();
