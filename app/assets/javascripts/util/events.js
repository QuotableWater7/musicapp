/*
 *  A simple, lightweight method of doing pubsub across the application
 */
(function () {
  'use strict';

  App.events = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    publish: publish
  };

  var topics = {};

  function getQueue(topic) { return (topics[topic] = topics[topic] || []); }

  function subscribe(topic, listener) {
    var queue = getQueue(topic);

    if (queue.indexOf(listener) < 0) {
      queue.push(listener);
    }
  }

  function unsubscribe(topic, listener) {
    var queue = getQueue(topic);
    topics[topic] = _.without(queue, listener);
  }

  function publish(topic, info) {
    var listeners = getQueue(topic);
    if (_.isUndefined(info)) { info = {}; }

    _.each(listeners, function (listener) { listener(info); });
  }
})();
