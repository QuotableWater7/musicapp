(function () {
  'use strict';

  App.Nav = React.createClass({

    _separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    _navigateTo: function (view) {
      return function () {
        App.events.publish('schedule.update', { current_view: view });
      };
    },

    _configProps: function () {
      return {
        className: 'btn btn-primary'
      }
    },

    _practiceProps: function () {
      return {
        className: 'btn btn-primary'
      }
    },

    render: function () {
      return (
        <div className='row text-center'>
          <span {...this._configProps()} onClick={this._navigateTo('config')}>Config</span>
          {this._separator()}
          <span {...this._practiceProps()} onClick={this._navigateTo('practice')}>Practice</span>
          <br/><br/>
        </div>
      )
    }

  });

})();
