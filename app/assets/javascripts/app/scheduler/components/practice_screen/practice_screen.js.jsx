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

    exerciseIdx: function () {
      return this.schedule().exercise_idx;
    },

    currentActivity: function () {
      return this.schedule().exercises.at([this.exerciseIdx()]);
    },

    setNextActivity: function () {
      var num_exercises = this.schedule().exercises.length;
      var update_data = { exercise_idx: (this.exerciseIdx() + 1) % num_exercises };
      App.events.publish('schedule.update', update_data);
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
            time={2}
            onFinish={this.setNextActivity}
          />
        </div>
      );
    }

  });

})();
