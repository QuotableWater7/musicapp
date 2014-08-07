(function () {
  'use strict';

  var TemplateView = Backbone.View.extend({
    template: _.template($('#template-view').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
      this.$el.html(this.template);
    },

    render: function () {
      return this;
    }
  });

  App.Views.TemplateView = TemplateView;
});
