(function () {
  'use strict';

  App.Router = Backbone.Router.extend({
    routes : {
      'practice': 'practice',
      'config': 'config',
      '*actions': 'config'
    }
  });

})();
