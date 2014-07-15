(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#tab-view').html()),

    events: {
      'click .remove-tab': 'destroyView',
      'click .save-tab': 'update'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.on('change', this.render, this);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.find('.editable').attr('contenteditable', true);
      return this;
    },

    // ** helpers ** //
    destroyView: function () {
      this.model.destroy();
      this.undelegateEvents();
      this.$el.removeData().unbind().remove();
    },

    update: function () {
      this.model.set({
        song: this.$el.find('.song').text(),
        artist: this.$el.find('.artist').text(),
        url: this.$el.find('.url').text(),
        sessions_completed: this.$el.find('.sessions-completed').text(),
        total_minutes: this.$el.find('.total-minutes').text()
      });

      this.model.save();
      alert('Saved successfully');
    }
  });

  MusicApp.Views.TabView = TabView;
})();
