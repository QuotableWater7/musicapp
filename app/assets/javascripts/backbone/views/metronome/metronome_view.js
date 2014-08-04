(function () {
  'use strict';

  var toggle_state = 'off';
  var interval_id;
  var timeout_id;
  var sound = new Howl({
    urls: ['/assets/snare-01.wav']
  });
  var bpm;
  var time_to_wait = 500;   // after typing in bpm input

  var MetronomeView = Backbone.View.extend({
    template: _.template($('#metronome-view').html()),

    events: {
      'click .metronome-toggle': 'toggle',
      'keyup .metronome-bpm': 'startCountdown',
      'click .btn-preset-bpm': 'updateBpm'
    },

    initialize: function () {
      _.bindAll(this, 'render');

      this.$el.html(this.template());
      bpm = this.$el.find('.metronome-bpm').val();
    },

    render: function () {
      return this;
    },

    // helpers
    toggle: function () {
      if (toggle_state === 'off') {
        this.turnOn();
      } else {
        this.turnOff();
      }
    },

    turnOn: function () {
      toggle_state = 'on';

      sound.play();   // play first beat immediately
      interval_id = setInterval(function () {
        sound.play();
      }, 60*1000/bpm);

      this.$el.find('.metronome-toggle')
        .removeClass('btn-primary')
        .addClass('btn-secondary')
        .text('Pause');
    },

    turnOff: function () {
      toggle_state = 'off';
      clearInterval(interval_id);

      this.$el.find('.metronome-toggle')
        .removeClass('btn-secondary')
        .addClass('btn-primary')
        .text('Play');
    },

    // don't change beat until 500ms after user's last keystroke
    startCountdown: function (evt) {
      var self = this;

      if (timeout_id) { clearTimeout(timeout_id); }
      timeout_id = setTimeout(
        function () {
          bpm = self.$el.find('.metronome-bpm').val();
          self.updateBpm(evt);
        },
        time_to_wait
      );
    },

    // this handles updating the bpm from either button click or the countdown
    updateBpm: function (evt) {
      var $target = $(evt.target);
      var current_time = new Date().getTime();

      // if user clicks preset
      if ($target.hasClass('btn-preset-bpm')) {
        bpm = $target.text();
        this.$el.find('.metronome-bpm').val(bpm);
      }

      this.turnOff();
      this.turnOn();
    }
  });

  App.Views.MetronomeView = MetronomeView;
})();
