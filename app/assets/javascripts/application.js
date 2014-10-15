//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require bootstrap-slider
//= require underscore
//= require howler
//= require cookies
//= require_tree ./util
//= require countdown
//= require backbone

_.templateSettings = {
  evaluate:    /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g,
  escape:      /\{\{-(.+?)\}\}/g
};

window.App = window.App || {};

window.App.Models = {};
window.App.Collections = {};
window.App.Routers = {};
window.App.Views = {};
