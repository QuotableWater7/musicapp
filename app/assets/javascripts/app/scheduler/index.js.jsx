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
        '_save');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });

      App.events.subscribe('scheduler.continue', this._save);
      this.exercises.on('add remove reset', this._renderCurrent);
      this.exercises.fetch();
      this._renderConfig();

      this.router = new App.Router();
      this.router.on({
        'route:config': this._renderConfig,
        'route:practice': this._renderPractice,
      });
      Backbone.history.start();

      return this;
    },

    _renderCurrent: function () {
      this['_render' + this._current_view]();
    },

    _save: function () {
      this.schedule.save();
      this.exercises.each(function (model) { model.save(); });
      this.router.navigate('#/practice', { trigger: true });
    },

    _renderConfig: function () {
      React.render(
        <App.ScheduleConfig
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()} />,
        this.$el[0]
      );

      this._current_view = 'Config';
    },

    _renderPractice: function () {
      React.render(<div>Blah</div>, this.$el[0]);

      this._current_view = 'Practice';
    }

  });

  var scheduler = new App.Runner();
})();
