(function () {
  'use strict';

  var toggle_state = 'off';
  var interval_id;
  var timeout_id;
  var sound = new Howl({
    urls: ['/assets/snare-01.wav']
  });
  var bpm;
  var time_to_wait = 500;   // in milliseconds
  var last_keystroke = new Date().getTime() - time_to_wait;

  var MetronomeView = Backbone.View.extend({
    template: _.template($('#metronome-view').html()),

    events: {
      'click .metronome-toggle': 'toggle',
      'keyup .metronome-bpm': 'updateBpm'
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
        .removeClass('btn-success')
        .addClass('btn-danger')
        .text('Pause');
    },

    turnOff: function () {
      toggle_state = 'off';
      clearInterval(interval_id);

      this.$el.find('.metronome-toggle')
        .removeClass('btn-danger')
        .addClass('btn-success')
        .text('Play');
    },

    updateBpm: function () {
      var current_time = new Date().getTime();
      var new_bpm = parseInt(this.$el.find('.metronome-bpm').val());
      var enough_time_passed = current_time - last_keystroke > time_to_wait;

      last_keystroke = current_time;

      if (enough_time_passed && new_bpm && new_bpm <= 240) {
        bpm = new_bpm;
        this.turnOff();
        this.turnOn();
      }
    }
  });

  App.Views.MetronomeView = MetronomeView;
})();
