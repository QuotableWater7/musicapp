(function () {
  'use strict';

  App.Views.AppView = Backbone.View.extend({
    template: _.template($('#app-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template);

      return this;
    },

    render: function () {
      return this;
    }
  });
});
