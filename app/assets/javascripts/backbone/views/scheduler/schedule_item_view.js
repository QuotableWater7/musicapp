(function () {
  'use strict';

  var ScheduleItemView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#schedule-item-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var json = this.model.toJSON();

      this.$el.html(this.template(json));
      return this;
    }
  });

  App.Views.ScheduleItemView = ScheduleItemView;
})();
