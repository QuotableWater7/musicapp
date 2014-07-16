(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#tab-view').html()),

    events: {
      'dblclick .editable': 'makeEditable',
      'keydown .editable': 'makeUnsaved',
      'click .remove-tab': 'destroyView',
      'click .save-tab': 'save',
      'click .url-button': 'linkClick',
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
      var self = this;
      var $editable = $(e.target);

      if ($editable.hasClass('defaults')) {
        $editable.removeClass('defaults');
        $editable.text('');
      }

      $editable.attr('contenteditable', true);
      $editable.focus();

      $editable.on('blur', function () {
        $editable.attr('contenteditable', false);

        if ($editable.hasClass('url')) {
          self.$el.find('.url-button').data('url', $editable.text());
        }
      });
    },

    makeUnsaved: function () {
      this.$el.addClass('tab-unsaved')
    },

    linkClick: function (e) {
      window.open($(e.target).data('url'));
      var sessions_completed = parseInt(this.model.get('sessions_completed'));
      this.model.set('sessions_completed', sessions_completed + 1);
      this.makeUnsaved();
    },

    destroyView: function () {
      var confirm_delete = confirm('Are you sure you want to delete this tab?');

      if (confirm_delete) {
        this.model.destroy();
        this.undelegateEvents();
        this.$el.removeData().unbind().remove();
      }
    },

    save: function () {
      var self = this;

      this.model.set({
        song: this.$el.find('.song').text(),
        artist: this.$el.find('.artist').text(),
        url: this.$el.find('.url').text(),
        sessions_completed: this.$el.find('.sessions-completed').text(),
        total_minutes: this.$el.find('.total-minutes').text()
      });

      this.model.save();
      self.$el.removeClass('tab-unsaved');
    }
  });

  MusicApp.Views.TabView = TabView;
})();
