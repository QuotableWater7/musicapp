(function () {
  'use strict';

  App.Router = Backbone.Router.extend({
    routes : {
      practice: 'practice',
      '*actions': 'config'
    }
  });

})();
