(function () {
  'use strict';

  var countdown = new App.Countdown({
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
      this.startCountdown();
      return this;
    },

    startCountdown: function () {
      countdown.start(this.$el.find('.timer'));
    }
  });

  App.Views.TimerView = TimerView;
})();
