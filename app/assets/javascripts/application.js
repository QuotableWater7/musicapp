//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require bootstrap-slider
//= require howler
//= require cookies
//= require_tree ./util
//= require countdown
//= require underscore
//= require backbone
//= require react
//= require components

_.templateSettings = {
  evaluate:    /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g,
  escape:      /\{\{-(.+?)\}\}/g
};

window.App = window.App || {};
window.App.Models = {};
window.App.Collections = {};

App.Component = function () { };
App.Component.extend = Backbone.Model.extend;
