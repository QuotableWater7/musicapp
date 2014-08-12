App.Countdown = function () {
  'use strict';

  var self = this;

  // public
  self.init = init;
  self.start = start;
  self.getSeconds = getSeconds;
  self.getMinutes = getMinutes;
  self.getHours = getHours;
  self.pad = pad;

  // private
  var seconds;
  var interval_id;

  function init(opts) {
    seconds = parseInt(opts.seconds);

    if (opts.minutes) { seconds += 60 * parseInt(opts.minutes); }
    if (opts.hours) { seconds += 3600 * parseInt(opts.hours); };

    return this;
  }

  function start($el) {
    if (interval_id) { clearInterval(interval_id); }

    interval_id = setInterval(function () {
      tickDown();
      $el.html(toString());
    }, 1000);
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
    return pad(Math.floor(seconds / 60), 2, '0');
  }

  function getHours() {
    console.log(pad(Math.floor(seconds / 3600), 2, '0'));
    return pad(Math.floor(seconds / 3600), 2, '0');
  }

  function pad(val, digits, pad_char) {
    var padding = '';

    while (padding.length < digits - val.toString().length) {
      padding = padding + pad_char;
    }

    return padding + val;
  }
};
