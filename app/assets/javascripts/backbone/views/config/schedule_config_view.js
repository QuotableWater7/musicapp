(function () {
  'use strict';

  App.Views.ScheduleConfigView = Backbone.View.extend({
    template: _.template($('#schedule_config_template').html()),

    events: {
      'change input,select': 'updateModel',
      'click .btn': 'saveChanges'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'updateModel', 'saveChanges');
      this.model.fetch({ success: this.render });
    },

    render: function () {
      var json = this.model.toJSON();
      this.$el.html(this.template(json));

      return this;
    },

    updateModel: function (e) {
      var $target = $(e.target);
      this.model.set($target.data('attribute'), $target.val().trim());
    },

    saveChanges: function () {
      this.model.save({success: alert, error: alert});
    }
  });
})();
