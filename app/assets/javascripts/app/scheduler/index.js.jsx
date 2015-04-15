//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      _.bindAll(this, 'renderCurrent', 'save');

      this.initSchedule();
      this.schedule.on('change', this.save.bind(this));

      return this;
    },

    initSchedule: function () {
      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on('change', this.renderCurrent);
    },

    renderCurrent: function () {
      React.render(
        <div>
          <App.Nav/>
          <br/><br/>
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
        />
      );
    },

    renderPractice: function () {
      if (!this.currentViewIs('practice')) { return false; }
      return (
        <App.PracticeScreen
          schedule={this.schedule.toJSON()}
        />
      );
    },

    currentViewIs: function (view) {
      return view === this.schedule.get('current_view');
    },

    save: function () {
      this.schedule.save();
    }

  });

  var scheduler = new App.Runner({ $el: $('.app-container') });
})();
