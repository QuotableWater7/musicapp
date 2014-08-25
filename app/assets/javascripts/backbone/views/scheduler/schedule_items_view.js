(function () {
  'use strict';

  var schedule_items = [];
  var total_importance;

  App.Views.ScheduleItemsView = Backbone.View.extend({
    template: _.template($('#schedule-items-view').html()),

    events: {},

    initialize: function () {
      _.bindAll(this, 'render');

      this.$el.html(this.template());
      this.collection.fetch({ success: this.render });
    },

    render: function () {
      var self = this;

      this.collection.each(function (schedule_item) {
        self.loadScheduleItem(schedule_item);
      });

      return this;
    },

    loadScheduleItem: function (schedule_item) {
      total_importance += parseInt(schedule_item.get('importance'));

      var view = new App.Views.ScheduleItemView({ model: schedule_item });
      this.$el.find('tbody').append(view.render().$el);
      schedule_items.push(view);
    }
  });
})();
