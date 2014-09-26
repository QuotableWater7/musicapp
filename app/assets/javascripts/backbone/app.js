//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

//= require_self

$(document).ready(function () {
  'use strict';

  var view = new App.Views.AppView({ el: '.app-container' });
});
