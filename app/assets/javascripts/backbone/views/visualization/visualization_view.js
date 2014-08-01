(function () {
  'use strict';

  var Strings = ['e', 'B', 'G', 'D', 'A', 'E'];
  var Frets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var timer;

  var VisualizationView = Backbone.View.extend({
    template: _.template($('#visualization-view').html()),

    events: {
      '.submit': 'render',
      'click .next-btn': 'render',
      'keyup .timer input': 'updateTimer'
    },

    initialize: function () {
      var self = this;

      _.bindAll(this, 'render');
      this.$el.html(this.template());
      timer = parseInt(this.$el.find('.timer input').val()) * 1000;
    },

    render: function () {
      var self = this;

      var $display = this.$el.find('.display');
      var string = this.randomElement(Strings);
      var tabbed_fret = this.tabTemplate(this.randomElement(Frets));

      $display.find('.string').each(function () {
        $(this).text(self.tabTemplate('-'));
      });
      $display.find('.string[data-str="' + string + '"]').text(tabbed_fret);

      setTimeout(function () {
        self.render();
      }, timer);

      return this;
    },

    randomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    tabTemplate: function (char) {
      char = char.toString();
      char = char.length === 1 ? '-' + char : char;  // normalize length
      return '|----' + char + '-----|';
    },

    updateTimer: function (evt) {
      var $target = $(evt.target);
      var val = parseInt($target.val().trim());

      if (_.isNumber(val) && !_.isNaN(val)) {
        timer = val * 1000;
      }
    }
  });

  App.Views.VisualizationView = VisualizationView;
})();
