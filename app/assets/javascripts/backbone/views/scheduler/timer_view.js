(function () {
  'use strict';

  var countdown;
  var break_duration = { minutes: 2 };
  var break_time = false;

  var TimerView = Backbone.View.extend({
    template: _.template($('#schedule-timer').html()),

    events: {
      'finished': 'breakTime'
    },

    initialize: function () {
      _.bindAll(this, 'render');

      this.render();
    },

    render: function () {
      this.$el.html(this.template());

      countdown = new App.Countdown().init({
        seconds: 30,
        minutes: 10,
        hours: 0,
        $el: this.$el.find('.timer')
      });

      return this;
    },

    startCountdown: function (name, opts) {
      this.$el.find('.activity-name').text(name);
      countdown.start(opts);
    },

    setBreakDuration: function (duration) {
      break_duration = { minutes: duration };
    },

    breakTime: function () {
      if (break_time) {
        this.$el.trigger('nextActivity');
      } else {
        this.$el.find('.activity-name').text('Break');
        countdown.start(break_duration);
      }

      break_time = !break_time;
    }
  });

  App.Views.TimerView = TimerView;
})();
