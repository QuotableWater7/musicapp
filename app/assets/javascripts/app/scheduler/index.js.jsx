//= require ./models
//= require ./collections
//= require ./components
//= require ./router

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.$el = $('.app-container');
      _.bindAll(this, '_renderConfig');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.exercises = new App.Collections.Exercises([], { schedule_id: this.schedule.get('id') });
      this.router = new Backbone.Router();
      Backbone.history.start();

      App.events.subscribe('scheduler.save', this._save.bind(this));
      this.exercises.on('add remove reset', this._renderConfig.bind(this));
      this.exercises.fetch();
      this._renderConfig();

      this.router.on({
        'route:config': function () {
          console.log('bleh');
        },

        'route:practice': function () {
          console.log('bleeeee');
        }
      });

      return this;
    },

    _save: function () {
      this.schedule.save();
      // this._renderPractice();
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
      React.render(<div>Blah</div>, this.$el[0]);
    }

  });

  var scheduler = new App.Runner();
})();
