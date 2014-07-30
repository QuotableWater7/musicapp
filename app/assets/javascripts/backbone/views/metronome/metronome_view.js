(function () {
  'use strict';

  var sound = new Howl({
    urls: ['/assets/snare-01.wav']
  });

  var toggle_state = 'off';

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
    },

    turnOff: function () {
      toggle_state = 'off';
    }

  });

  App.Views.MetronomeView = MetronomeView;
})();
