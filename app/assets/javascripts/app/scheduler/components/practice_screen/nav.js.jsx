(function () {
  'use strict';

  App.Nav = React.createClass({

    propTypes: {
      schedule: React.PropTypes.object.isRequired
    },

    separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    navigate: function (view) {
      return function () {
        App.events.publish('schedule.update', { current_view: view });
      };
    },

    classForButton: function (button) {
      var is_current_view = this.props.schedule.current_view === button;
      return 'btn ' + (is_current_view ? 'btn-primary' : 'btn-secondary');
    },

    configBtn: function () {

      return (
        <span className={this.classForButton('config')} onClick={this.navigate('config')}>
          Settings
        </span>
      );
    },

    practiceBtn: function () {
      return (
        <span
          className={this.classForButton('practice')}
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
