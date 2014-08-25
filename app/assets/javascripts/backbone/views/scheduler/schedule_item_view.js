(function () {
  'use strict';

  var ScheduleItemView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#schedule-item-view').html()),

    events: {
      'keypress': 'disableEnter',
      'blur .schedule-item-importance': 'save'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'triggerChange');
    },

    render: function () {
      var json = this.model.toJSON();

      this.$el.html(this.template(json));
      return this;
    },

    disableEnter: function (e) {
      var keycode = (event.keyCode ? event.keyCode : event.which);

      if (keycode === 13) {
        e.preventDefault();
        $(e.target).blur();
      }
    },

    save: function () {
      var importance = this.$el.find('.schedule-item-importance').text();
      this.model.save({ importance: importance, success: this.triggerChange });
    },

    triggerChange: function () {
      this.$el.trigger('scheduleItemChange');
    }
  });

  App.Views.ScheduleItemView = ScheduleItemView;
})();
