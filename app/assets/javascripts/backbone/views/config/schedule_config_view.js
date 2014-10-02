(function () {
  'use strict';

  App.Views.ScheduleConfigView = Backbone.View.extend({
    template: _.template($('#schedule_config_template').html()),

    initialize: function () {
      _.bindAll(this, 'render');

      this.model.fetch({ success: this.render });
    },

    render: function () {
      var json = this.model.toJSON();
      this.$el.html(this.template({ json: json }));

      return this;
    }
  });
})();
