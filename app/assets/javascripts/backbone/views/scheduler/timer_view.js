(function () {
  'use strict';

  var countdown;
  var break_duration = { minutes: 5 };
  var break_time = false;

  var TimerView = Backbone.View.extend({
    template: _.template($('#schedule-timer').html()),

    events: {
      'finished': 'breakTime'
    },

    initialize: function () {
      _.bindAll(this, 'render');
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
