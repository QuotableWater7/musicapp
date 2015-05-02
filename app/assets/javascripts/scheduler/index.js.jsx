//= require ./models
//= require ./collections
//= require ./components

(function () {
  'use strict';

  App.Runner = App.Component.extend({

    init: function () {
      this.schedule = new App.Models.Schedule(this.$el.data('schedule'));
      this.schedule.on({
        change: function () {
          this.schedule.save();
          this.render_view();
        }.bind(this)
      });

      return this;
    },

    render_view: function () {
      React.render(
        <div>
          {this['render_' + this.schedule.get('current_view')]()}
        </div>,
        this.$el[0]
      )
    },

    render_config: function () {
      return <App.Settings {...this.schedule.toJSON()}/>;
    },

    render_practice: function () {
      return <App.PracticeScreen {...this.schedule.toJSON()}/>;
    }
  });

  var scheduler = new App.Runner({ $el: $('.app-container') });
})();
