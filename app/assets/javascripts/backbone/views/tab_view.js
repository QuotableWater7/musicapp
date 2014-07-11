(function () {
  'use strict';

  var TabView = Backbone.View.extend({
    el: '.tabs-table tbody',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var template = _.template($('#tab-view').html());
      $(this.el).prepend(template(this.model.toJSON()));
    }
  });

  MusicApp.Views.TabView = TabView;
})();
