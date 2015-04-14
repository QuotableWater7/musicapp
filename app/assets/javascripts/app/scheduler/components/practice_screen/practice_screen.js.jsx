(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    // propTypes: {
    //   schedule: React.PropTypes.
    // },

    _separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    currentActivity: function () {
      return this.props.exercises[this.props.schedule.exercise_idx];
    },

    setNextActivity: function () {
      console.log('done');
    },

    render: function () {
      var current_activity = this.currentActivity();

      return (
        <div className='practiceScreen'>
          <div className='col-md-12 text-center'>
            <span className='btn btn-secondary'>&lt;&lt;</span>
            {this._separator()}
            <span className='btn btn-secondary'>&gt;&gt;</span>
          </div>
          <br/>
          <App.Timer
            title={current_activity.name}
            time={3}
            onFinish={this.setNextActivity}
          />
        </div>
      );
    }

  });

})();
