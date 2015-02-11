//= require ./models
//= require ./collections
//= require ./components
//= require ./router

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    _current_view: undefined,

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderConfig', '_renderPractice', '_renderCurrent',
        '_continue', '_back');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });

      this.exercises.on('add remove reset', this._renderCurrent);
      this.exercises.fetch();
      this._renderConfig();

      // this.router = new App.Router();
      // this.router.on({
      //   'route:config': this._renderConfig,
      //   'route:practice': this._renderPractice,
      // });
      // Backbone.history.start();

      return this;
    },

    _renderCurrent: function () {
      this['_render' + this._current_view]();
    },

    _continue: function () {
      this.schedule.save();
      this.exercises.each(function (model) { model.save(); });
      this._renderPractice();
      // this.router.navigate('practice', { trigger: true });
    },

    _back: function () {
      this._renderConfig();
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

      this._current_view = 'Config';
    },

    _renderPractice: function () {
      React.render(<App.PracticeScreen back={this._back}/>, this.$el[0]);

      this._current_view = 'Practice';
    }

  });

  var scheduler = new App.Runner();
})();
