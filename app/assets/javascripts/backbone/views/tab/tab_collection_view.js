(function () {
  'use strict';

  var TabsView = Backbone.View.extend({
    el: '.view',
    template: _.template($('#tabs-view').html()),

    events: {
      'click .add-tab': 'newTab'
    },

    initialize: function () {
      var self = this;
      _.bindAll(this, 'render');
      this.collection.fetch({ success: this.render });
      window.onbeforeunload = function () { return self.checkUnsavedChanges(); };
    },

    render: function () {
      var self = this;
      this.$el.empty().append(this.template());
      this.$tbody = self.$el.find('.tabs-table tbody tr:last-child');

      this.collection.each(function (tab) {
        self.addTabView(tab);
      });
    },

    // helpers
    newTab: function () {
      var tab = new MusicApp.Models.Tab();
      tab.default_values = true;
      this.collection.add(tab);
      this.addTabView(tab);
    },

    addTabView: function (tab) {
      var view = new MusicApp.Views.TabView({ model: tab });
      this.$tbody.before(view.render().$el);
    },

    checkUnsavedChanges: function () {
      var unsaved = this.$el.find('.tab-unsaved').length;

      if (unsaved) {
        return 'Warning!  You have not saved all your changes.';
      }
    }
  });

  MusicApp.Views.TabsView = TabsView;
})();
