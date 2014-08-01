(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#tab-view').html()),

    events: {
      'dblclick .editable': 'makeEditable',
      'keydown .editable': 'changesMade',
      'click .remove-tab': 'destroyView',
      'click .save-tab': 'save',
      'click .url-button': 'linkClick',
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.on('change', this.render, this);
      this.$el.html(this.template(this.model.toJSON()));
    },

    render: function () {
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

        self.model.set($editable.data('attr'), $editable.text());
      });
    },

    changesMade: function (e) {
      var self = this;
      var keycode = (event.keyCode ? event.keyCode : event.which);
      var $editable = $(e.target);

      this.$el.addClass('tab-unsaved');
      this.$el.find('.save-tab')
        .removeClass('btn-secondary')
        .addClass('btn-primary');

      if (keycode === 13) {
        e.preventDefault();
        $editable.blur();
      }
    },

    linkClick: function () {
      var address = this.$el.find('.editable[data-attr="url"]').text().trim();
      window.open(address);
      var sessions = parseInt(this.model.get('sessions_completed')) + 1;
      this.model.set('sessions_completed', sessions);
      this.$el.find('.editable[data-attr="sessions_completed"]').text(sessions);
      this.save();
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
      this.model.save();
      this.$el.removeClass('tab-unsaved');
      this.$el.find('.save-tab')
        .removeClass('btn-primary')
        .addClass('btn-secondary');
    }
  });

  App.Views.TabView = TabView;
})();
