(function () {
  'use strict';

  var countdown = new Countdown({
    seconds: 30,
    minutes: 10,
    hours: 0
  });

  var TimerView = Backbone.View.extend({
    template: _.template($('#schedule-timer').html()),

    events: {
      '.start-countdown': 'startCountdown'
    },

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      this.$el.html(this.template());

      return this;
    },

    startCountdown: function () {
      countdown.start();
    }
  });

  App.Views.TimerView = TimerView;
})();
