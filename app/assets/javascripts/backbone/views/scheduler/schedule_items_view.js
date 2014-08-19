(function () {
  'use strict';

  App.Views.ScheduleItemsView = Backbone.View.extend({
    template: _.template($('#schedule-items-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');

      this.collection.fetch({ success: this.render });
    },

    render: function () {
      this.$el.find('tbody').html('<tr><td>Schedule Items</td></tr>');

      return this;
    }
  });
})();
