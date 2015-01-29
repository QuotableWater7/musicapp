//= require ./models
//= require ./collections
//= require ./components
//= require ./router

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderConfig', '_renderPractice');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });

      App.events.subscribe('scheduler.save', this._save.bind(this));
      this.exercises.on('add remove reset', this._renderConfig.bind(this));
      this.exercises.fetch();
      this._renderConfig();

      this.router = new App.Router();
      this.router.on({
        'route:config': this._renderConfig,
        'route:practice': this._renderPractice
      });
      Backbone.history.start();

      return this;
    },

    _save: function () {
      this.schedule.save();
      this.exercises.each(function (model) {
        model.save();
      });
      this.router.navigate('practice', { trigger: true });
    },

    _renderConfig: function () {
      React.render(
        <App.Scheduler
          schedule={this.schedule.toJSON()}
          exercises={this.exercises.toJSON()} />,
        this.$el[0]
      );
    },

    _renderPractice: function () {
      console.log('blah');
      React.render(<div>Blah</div>, this.$el[0]);
    }

  });

  var scheduler = new App.Runner();
})();
