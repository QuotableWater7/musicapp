App.Countdown = function () {
  'use strict';

  var self = this;

  // public
  self.init = init;
  self.start = start;

  // private
  var seconds;
  var interval_id;
  var $el;

  function init(opts) {
    seconds = 0;

    if (opts.seconds) { seconds = parseInt(opts.seconds); };
    if (opts.minutes) { seconds += 60 * parseInt(opts.minutes); }
    if (opts.hours) { seconds += 3600 * parseInt(opts.hours); }
    if (opts.$el) { $el = opts.$el; }

    return this;
  }

  function start(opts) {
    if (opts) { init(opts); }
    if (interval_id) { clearInterval(interval_id); }

    interval_id = setInterval(function () {
      tickDown();
      $el.html(toString());
      if (seconds === 0) { $el.trigger('finished'); }
    }, 1000);

    $el.html(toString());
  }

  function tickDown() {
    if (seconds > 0) { seconds -= 1; }
  }

  function toString() {
    return getHours() + ':' + getMinutes() + ':' + getSeconds();
  }

  function getSeconds() {
    return pad(seconds % 60, 2, '0');
  }

  function getMinutes() {
    return pad(Math.floor(seconds / 60) % 60, 2, '0');
  }

  function getHours() {
    return pad(Math.floor(seconds / 3600), 2, '0');
  }

  function pad(val, digits, pad_char) {
    var padding = '';
    var val_length = val.toString().length;

    while (padding.length < digits - val_length) {
      padding = padding + pad_char;
    }

    return padding + val;
  }
};
