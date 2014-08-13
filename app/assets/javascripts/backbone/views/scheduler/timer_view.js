(function () {
  'use strict';

  var countdown = new App.Countdown().init({
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

    startCountdown: function (name, opts) {
      this.$el.find('.activity-name').text(name);
      countdown.start(this.$el.find('.timer'), opts);
    },

    previous: function () {

    }
  });

  App.Views.TimerView = TimerView;
})();
