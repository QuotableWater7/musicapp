//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require bootstrap-slider
//= require howler
//= require cookies
//= require countdown
//= require underscore
//= require backbone
//= require react
//= require d3/d3
//= require_tree ./util

_.templateSettings = {
  evaluate:    /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g,
  escape:      /\{\{-(.+?)\}\}/g
};

window.App = window.App || {};
window.App.Models = {};
window.App.Collections = {};

var component_opts = ['$el'];
App.Component = function (opts) {
  _.extend(this, _.pick(opts, component_opts));
  this.init.apply(this, opts);
};
App.Component.extend = Backbone.Model.extend;
