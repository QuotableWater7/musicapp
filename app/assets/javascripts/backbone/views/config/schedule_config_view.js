(function () {
  'use strict';

  var durations = {
    '15': { value: 15, display: '15 min' },
    '30': { value: 30, display: '30 min' },
    '45': { value: 45, display: '45 min' },
    '60': { value: 60, display: '1 hr'},
    '120': { value: 120, display: '2 hrs' },
    '180': { value: 180, display: '3 hrs' },
    '360': { value: 360, display: '6 hrs' }
  };

  App.Views.ScheduleConfigView = Backbone.View.extend({
    template: _.template($('#schedule_config_template').html()),

    events: {
      'change input': 'updateModel',
      'click .btn': 'saveChanges'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'updateModel', 'saveChanges');

      this.model.fetch({ success: this.render });
    },

    render: function () {
      var json = this.model.toJSON();
      durations[json.duration].selected = 'selected';
      _.extend(json, { durations: durations });

      this.$el.html(this.template({ json: json }));

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
