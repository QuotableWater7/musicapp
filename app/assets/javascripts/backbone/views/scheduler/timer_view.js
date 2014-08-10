(function () {
  'use strict';

  var minutes;
  var seconds;

  var TimerView = Backbone.View.extend({
    template: _.template($('#schedule-timer').html()),

    events: {

    },

    initialize: function () {
      _.bindAll(this, 'render');
    },

    render: function () {
      this.$el.html(this.template());

      return this;
    }
  });

  App.Views.TimerView = TimerView;
})();
