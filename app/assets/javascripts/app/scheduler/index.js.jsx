//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderTable');
      this.collection = new App.Collections.Exercises(this.$el.data());
      this._renderTable();

      return this;
    },

    _renderTable: function () {
      React.render(
        <App.Scheduler collection={this.collection}/>,
        this.$el[0]
      );
    }

  });

  var scheduler = new App.Runner();
})();
