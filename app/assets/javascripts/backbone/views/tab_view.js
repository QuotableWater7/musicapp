(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    template: _.template($('#tab-view').html()),

    events: {
      'click .remove-tab': 'destroyView'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el = this.template(this.model.toJSON());
      this.model.on('change', this.render, this);
    },

    render: function () {
      var $el = this.$el;
      var model = this.model;

      $el.find('.song').text(model.get('song'));
      $el.find('.artist').text(model.get('artist'));
      $el.find('.url').text(model.get('url'));
      $el.find('.sessions-completed').text(model.get('sessions_completed'));
      $el.find('.total-minutes').text(model.get('total_minutes'));

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
