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
      App.events.publish('schedule.update', { exercise_idx: this.schedule().exercise_idx + 1 });
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
          <br/><br/><br/>
          <App.Timer
            title={current_activity.get('name')}
            time={3}
            onFinish={this.setNextActivity}
          />
        </div>
      );
    }

  });

})();
