(function () {
  'use strict';


  var interval_id;
  var timeout_id;
  var speedup_id;

  var auto_speed_beats = 8;   // beats between speeding up metronome
  var toggle_state = 'off';
  var sound = new Howl({ urls: ['/assets/snare-01.wav'] });
  var bpm;
  var time_to_wait = 500;   // after typing in bpm input
  var max_bpm = 240;

  var MetronomeView = Backbone.View.extend({
    template: _.template($('#metronome-view').html()),

    events: {
      'click .metronome-toggle': 'toggle',
      'keyup .metronome-bpm': 'startCountdown',
      'click .btn-preset-bpm': 'presetBpm',
      'click .btn-speedup': 'autoSpeed'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'autoSpeed');

      this.$el.html(this.template());
      bpm = this.$el.find('.metronome-bpm').val();
    },

    render: function () {
      return this;
    },

    // helpers
    toggle: function () {
      if (toggle_state === 'off') {
        this.$el.find('.metronome-toggle')
          .removeClass('btn-primary')
          .addClass('btn-secondary')
          .text('Pause');

        this.turnOn();
      } else {
        this.$el.find('.metronome-toggle')
          .removeClass('btn-secondary')
          .addClass('btn-primary')
          .text('Play');

        this.turnOff();
      }
    },

    turnOn: function () {
      toggle_state = 'on';

      sound.play();   // play first beat immediately
      interval_id = setInterval(function () {
        sound.play();
      }, 60000/bpm);
    },

    turnOff: function () {
      toggle_state = 'off';
      clearInterval(interval_id);
      clearTimeout(speedup_id);
    },

    // don't change beat until 500ms after user's last keystroke
    startCountdown: function (evt) {
      var self = this;

      if (timeout_id) { clearTimeout(timeout_id); }
      timeout_id = setTimeout(
        function () {
          bpm = self.$el.find('.metronome-bpm').val();
          self.refreshBpm();
        },
        time_to_wait
      );
    },

    presetBpm: function (evt) {
      var $target = $(evt.target);

      bpm = $target.text();
      this.refreshBpm();
    },

    // this handles updating the bpm
    refreshBpm: function () {
      this.$el.find('.metronome-bpm').val(bpm);

      this.turnOff();
      this.toggle();
    },

    autoSpeed: function (evt) {
      var bpm_int = parseInt(bpm);

      if (bpm_int < max_bpm) {
        bpm = bpm_int + 6;
        var next_speedup = 60000 * auto_speed_beats / bpm;

        this.refreshBpm();
        speedup_id = setTimeout(this.autoSpeed, next_speedup);
      } else {
        this.turnOff();
      }
    }
  });

  App.Views.MetronomeView = MetronomeView;
})();
