(function () {
  'use strict';

  App.Views.ConfigView = Backbone.View.extend({
    template: _.template($('#config_template').html()),

    initialize: function () {
      var $el = this.$el;
      $el.html(this.template());
    },

    render: function () { return this; }
  });
})();
