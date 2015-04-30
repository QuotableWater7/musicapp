(function () {
  'use strict';

  App.SettingsBtn = React.createClass({

    changeView: function () {
      App.events.publish('schedule.update', { current_view: 'config' });
    },

    render: function () {
      return (
        <div className='col-md-12 text-center'>
          <a href='#' onClick={this.changeView}>
            Settings
          </a>
        </div>
      );
    }

  });

})();
