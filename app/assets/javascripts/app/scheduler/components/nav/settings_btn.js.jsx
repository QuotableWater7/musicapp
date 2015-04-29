(function () {
  'use strict';

  App.SettingsBtn = React.createClass({

    changeView: function () {
      App.events.publish('schedule.update', { current_view: 'config' });
    },

    render: function () {
      return (
        <div className='col-md-12 text-center'>
          <button className='btn btn-default btn-lg' onClick={this.changeView}>
            Settings <i className='fa fa-gear'></i>
          </button>
        </div>
      );
    }

  });

})();
