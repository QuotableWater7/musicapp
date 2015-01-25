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

      this.collection.on('add remove', this._renderTable);

      return this;
    },

    _renderTable: function () {
      var tableData = {
        exercises: this.collection.toJSON(),
        add: this.collection.add.bind(this.collection),
        remove: this.collection.remove.bind(this.collection)
      };

      React.render(
        <App.Scheduler tableData={tableData}/>,
        $('.app-container')[0]
      );
    }

  });

  var scheduler = new App.Runner().init();
})();
