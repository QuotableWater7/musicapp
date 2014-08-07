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
      console.log(this.model.toJSON());
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  App.Views.ScheduleView = ScheduleView;
})();
