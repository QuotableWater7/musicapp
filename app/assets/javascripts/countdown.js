(function () {
  'use strict';

  var self = this;

  // public
  self.init = init;
  self.start = start;
  self.toString = toString;

  // private
  var seconds;

  function init(opts) {
    seconds = parseInt(opts.seconds);

    if (opts.minutes) { seconds += 60 * parseInt(opts.minutes); }
    if (opts.hours) { seconds += 3600 * parseInt(opts.hours); };
  }

  function start() {
    setTimeout(function () {
      tickDown();
    }, 1000);
  }

  function tickDown() {
    seconds -= 1;
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
    return pad(Math.floor(seconds / 3600), 2, '0');
  }

  function pad(val, digits, pad_char) {
    var padding;

    while (padding.length < digits - val.length) {
      padding += pad_char;
    }

    return padding;
  }
})();
