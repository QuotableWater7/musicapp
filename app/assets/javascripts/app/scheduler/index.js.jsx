//= require ./collections
//= require ./models

(function () {
  'use strict';

  App.Scheduler = App.Component.extend({

    init: function () {
      _.bindAll(this, '_renderTable');
      this.collection = new App.Collections.Exercises();
      this._renderTable();

      window.c = this.collection;
      this.collection.on('add remove', this._renderTable);

      return this;
    },

    _renderTable: function () {
      React.render(
        <App.ExercisesTable
          exercises={this.collection.toJSON()}
          add={this.collection.add.bind(this.collection)}
          remove={this.collection.remove.bind(this.collection)}/>,
        $('.exercises-table-container')[0]
      );
    }

  });

  var scheduler = new App.Scheduler().init();
})();
