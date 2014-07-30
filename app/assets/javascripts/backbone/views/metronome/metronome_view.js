(function () {
  'use strict';

  var toggle_state = 'off';
  var interval_id;
  var sound = new Howl({
    urls: ['/assets/snare-01.wav']
  });

  var MetronomeView = Backbone.View.extend({
    template: _.template($('#metronome-view').html()),

    events: {
      'click .metronome-toggle': 'toggle'
    },

    initialize: function () {
      _.bindAll(this, 'render');

      this.$el.html(this.template());
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
      interval_id = setInterval(function () {
        sound.play();
      }, 2000);

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
    }
  });

  App.Views.MetronomeView = MetronomeView;
})();
