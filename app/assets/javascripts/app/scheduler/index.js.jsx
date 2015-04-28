//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      _.bindAll(this, 'renderCurrent');

      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on({
        change: function () {
          this.schedule.save();
          this.renderCurrent();
        }.bind(this)
      });

      return this;
    },

    renderCurrent: function () {
      React.render(
        <div>
          {this.renderConfig()}
          {this.renderPractice()}
        </div>,
        this.$el[0]
      )
    },

    renderConfig: function () {
      if (!this.currentViewIs('config')) { return false; }
      return (
        <App.Settings schedule={this.schedule.toJSON()}/>
      );
    },

    renderPractice: function () {
      if (!this.currentViewIs('practice')) { return false; }
      return (
        <App.PracticeScreen schedule={this.schedule.toJSON()}/>
      );
    },

    currentViewIs: function (view) {
      return view === this.schedule.get('current_view');
    }

  });

  var scheduler = new App.Runner({ $el: $('.app-container') });
})();
