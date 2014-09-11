(function () {
  'use strict';

  App.Views.ConfigView = Backbone.View.extend({
    template: _.template($('#config_template').html()),

    initialize: function () {

    },

    render: function () {
      this.$el.html(this.template());

      return this;
    }
  });
})();
