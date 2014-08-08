(function () {
  'use strict';

  var ScheduleView = Backbone.View.extend({
    template: _.template($('#schedule-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.model.fetch({ success: this.render });
    },

    render: function () {
      var self = this;
      var json = this.model.toJSON();

      this.$el.html(this.template(json));

      _.each(json.schedule_items, function (item) {
        var model = new App.Models.ScheduleItem(item);
        var item_view = new App.Views.ScheduleItemView({ model: model });
        self.$el.find('.schedule-table tbody').append(item_view.render().$el);
        // console.log(item_view.$el.html());
      });

      return this;
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
