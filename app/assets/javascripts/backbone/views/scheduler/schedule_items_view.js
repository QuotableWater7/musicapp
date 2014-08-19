(function () {
  'use strict';

  var schedule_items = [];

  App.Views.ScheduleItemsView = Backbone.View.extend({
    template: _.template($('#schedule-items-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');

      this.collection.fetch({ success: this.render });
    },

    render: function () {
      var self = this;

      // this.$el.html('this works');

      this.collection.each(function (schedule_item) {
        var current_view = new App.Views.ScheduleItemView({
          model: schedule_item
        });

        schedule_items.push(current_view);
        self.$el.find('tbody').append(current_view.$el);
      });

      return this;
    }
  });
})();
