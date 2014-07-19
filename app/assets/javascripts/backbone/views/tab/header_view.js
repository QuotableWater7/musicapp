(function () {
  'use strict';

  var HeaderView = Backbone.View.extend({
    el: '.view-header',
    template: _.template($('#app-header').html()),

    initialize: function (params) {
      this.title = params.title;
      this.description = params.description;

      return this;
    },

    render: function () {
      var view = this.template({
        title: this.title,
        description: this.description
      });

      this.$el.empty().html(view);
    }
  });

  App.Views.HeaderView = HeaderView;
})();
