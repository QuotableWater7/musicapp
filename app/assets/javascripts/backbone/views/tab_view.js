(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#tab-view').html()),

    events: {
      'dblclick .editable': 'makeEditable',
      'click .remove-tab': 'destroyView',
      'click .save-tab': 'update',
      'click .url a': 'linkClick'
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.on('change', this.render, this);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      if (this.model.default_values) {
        this.$el.find('.editable').addClass('defaults');
      }

      return this;
    },

    // ** helpers ** //
    makeEditable: function (e) {
      var $editable = $(e.target);

      if ($editable.hasClass('defaults')) {
        $editable.removeClass('defaults');
        $editable.text('');
      }

      $editable.attr('contenteditable', true);
      $editable.focus();

      $editable.on('blur', function () {
        $editable.attr('contenteditable', false);
      });
    },

    linkClick: function (e) {
      var sessions_completed = parseInt(this.model.get('sessions_completed'));
      this.model.set('sessions_completed', sessions_completed + 1);
      this.model.save();
    },

    destroyView: function () {
      var confirm_delete = confirm('Are you sure you want to delete this?');

      if (confirm_delete) {
        this.model.destroy();
        this.undelegateEvents();
        this.$el.removeData().unbind().remove();
      }
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
