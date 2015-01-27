//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderTable');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });
      App.events.subscribe('scheduler.save', this._save.bind(this));
      this.exercises.on('add remove reset', this._renderTable.bind(this));
      this.exercises.fetch();
      this._renderTable();

      return this;
    },

    _save: function () {
      this.schedule.save();
    },

    _renderTable: function () {
      React.render(
        <App.Scheduler
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()} />,
        this.$el[0]
      );
    }

  });

  var scheduler = new App.Runner();
})();
