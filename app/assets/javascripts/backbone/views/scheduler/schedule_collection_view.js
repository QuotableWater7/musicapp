(function () {
  'use strict';

  var SchedulesView = Backbone.View.extend({
    template: _.template($('#schedules-view').html()),

    events: {
    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.collection.fetch({ success: this.render });
    },

    render: function () {
      var self = this;
      // this.$el.html(this.template());
      // this.$tbody = self.$el.find('.tabs-table tbody tr:last-child');

      // this.collection.each(function (tab) {
      //   self.addTabView(tab);
      // });

      return this;
    },
  });

  App.Views.SchedulesView = SchedulesView;
})();
