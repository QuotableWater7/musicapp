(function () {
  var TabView = Backbone.View.extend({
    el: '.app-container',

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      var template = _.template($('#tab-view').html());
      $(this.el).append(template);
    }
  });

  MusicApp.Views.TabView = TabView;
})();
