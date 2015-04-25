(function () {
  'use strict';

  App.Nav = React.createClass({

    separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    navigate: function (view) {
      return function () {
        App.events.publish('schedule.update', { current_view: view });
      };
    },

    configBtn: function () {
      return (
        <span className='btn btn-primary' onClick={this.navigate('config')}>
          Settings
        </span>
      );
    },

    practiceBtn: function () {
      return (
        <span
          className='btn btn-primary'
          onClick={this.navigate('practice')}
          disabled={this.props.schedule.exercises.length === 0}
        >
          Practice
        </span>
      );
    },

    render: function () {
      return (
        <div className='row text-center'>
          {this.configBtn()}
          {this.separator()}
          {this.practiceBtn()}
        </div>
      )
    }

  });

})();
