//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderCurrent', '_continue', '_back');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on('change:current_view', this._renderCurrent);

      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });
      this.exercises.on('add remove reset', this._renderCurrent);
      this.exercises.fetch({ reset: true });

      return this;
    },

    _renderCurrent: function () {
      this['_render' + this.schedule.get('current_view')]();
    },

    _continue: function () {
      this.schedule.set('current_view', 'Practice');
      this.schedule.save();
      this.exercises.each(function (model) { model.save(); });
    },

    _back: function () {
      this.schedule.set('current_view', 'Config');
    },

    _renderConfig: function () {
      React.render(
        <App.ScheduleConfig
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()}
          continue={this._continue}
        />,
        this.$el[0]
      );
    },

    _renderPractice: function () {
      React.render(<App.PracticeScreen back={this._back}/>, this.$el[0]);
    }

  });

  var scheduler = new App.Runner();
})();
