(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    propTypes: {
      schedule: React.PropTypes.object.isRequired
    },

    _separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    schedule: function () {
      return this.props.schedule;
    },

    currentActivity: function () {
      return this.schedule().exercises.at([this.schedule().exercise_idx]);
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
            title={current_activity.get('name') || 'Not provided'}
            time={3}
            onFinish={this.setNextActivity}
          />
        </div>
      );
    }

  });

})();
