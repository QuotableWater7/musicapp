//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      _.bindAll(this, 'renderCurrent', 'saveScheduleAndExercises');

      this.initSchedule();
      this.initExercises();

      this.exercises.fetch({ reset: true });

      window.onbeforeunload = this.saveScheduleAndExercises;

      return this;
    },

    initSchedule: function () {
      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on('change:current_view', this.renderCurrent);
    },

    initExercises: function () {
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });
      this.exercises.on('add remove reset', this.renderCurrent);
    },

    renderCurrent: function () {
      React.render(
        <div>
          <App.Nav/>
          {this.renderConfig()}
          {this.renderPractice()}
        </div>,
        this.$el[0]
      )
    },

    renderConfig: function () {
      if (!this.currentViewIs('config')) { return false; }
      return (
        <App.ScheduleConfig
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()}
        />
      );
    },

    renderPractice: function () {
      if (!this.currentViewIs('practice')) { return false; }
      return (
        <App.PracticeScreen
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()}
        />
      );
    },

    currentViewIs: function (view) {
      return view === this.schedule.get('current_view');
    },

    saveScheduleAndExercises: function () {
      this.schedule.save();
      this.exercises.each(function (exercise) { exercise.save(); });
    }

  });

  var scheduler = new App.Runner({ $el: $('.app-container') });
})();
