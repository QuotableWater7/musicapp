(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    template: _.template($('#tab-view').html()),

    events: {
      'click .remove-tab': 'destroyView'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.on('change', this.render, this);
    },

    render: function () {
      this.setElement(this.template(this.model.toJSON()));
      return this;
    },

    // ** helpers ** //
    destroyView: function() {
      this.model.destroy();
      this.undelegateEvents();
      this.$el.removeData().unbind().remove();
    }
  });

  MusicApp.Views.TabView = TabView;
})();
