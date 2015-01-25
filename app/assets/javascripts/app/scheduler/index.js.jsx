//= require ./collections
//= require ./models
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      _.bindAll(this, '_renderTable');
      this.collection = new App.Collections.Exercises();
      this._renderTable();

      return this;
    },

    _renderTable: function () {
      React.render(
        <App.Scheduler collection={this.collection}/>,
        $('.app-container')[0]
      );
    }

  });

  var scheduler = new App.Runner();
})();
