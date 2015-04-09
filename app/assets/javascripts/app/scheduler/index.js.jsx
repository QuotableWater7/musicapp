//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderCurrent');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on('change:current_view', this._renderCurrent);

      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });
      this.exercises.on('add remove reset', this._renderCurrent);
      this.exercises.fetch({ reset: true });

      window.beforeonunload = this._saveScheduleAndExercises;

      return this;
    },

    _renderCurrent: function () {
      React.render(
        <div>
          <App.Nav/>
          {this._renderConfig()}
          {this._renderPractice()}
        </div>,
        this.$el[0]
      )
    },

    _renderConfig: function () {
      if (!this._currentViewIs('config')) { return false; }
      return (
        <App.ScheduleConfig
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()}
        />
      );
    },

    _renderPractice: function () {
      if (!this._currentViewIs('practice')) { return false; }
      return <App.PracticeScreen/>;
    },

    _currentViewIs: function (view) {
      return view === this.schedule.get('current_view');
    },

    _saveScheduleAndExercises: function () {
      this.schedule.save();
      this.exercises.each(function (exercise) { exercise.save(); });
    }

  });

  var scheduler = new App.Runner();
})();
