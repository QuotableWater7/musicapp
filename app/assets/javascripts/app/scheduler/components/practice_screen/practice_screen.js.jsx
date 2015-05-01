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

    prevActivity: function () {
      var num_exercises = this.schedule().exercises.length;
      var next_index = this.exerciseIdx() - 1;
      next_index = next_index < 0 ? next_index + num_exercises : next_index;
      App.events.publish('schedule.update', { exercise_idx: next_index });
    },

    nextActivity: function () {
      var num_exercises = this.schedule().exercises.length;
      var update_data = { exercise_idx: (this.exerciseIdx() + 1) % num_exercises };
      App.events.publish('schedule.update', update_data);
    },

    timeForActivity: function () {
      var schedule_time = this.schedule().seconds;
      var total_importance = this.schedule().total_importance;
      var activity_importance = this.currentActivity().get('importance');

      return Math.round(schedule_time * activity_importance / total_importance);
    },

    render: function () {
      var current_activity = this.currentActivity();

      return (
        <div className='practiceScreen'>
          <div className='col-md-12 text-center'>
            <span className='btn btn-default' onClick={this.prevActivity}>
              &lt;&lt;
            </span>
            {this._separator()}
            <span className='btn btn-default' onClick={this.nextActivity}>
              &gt;&gt;
            </span>
          </div>
          <br/><br/>
          <App.Timer
            title={current_activity.get('name')}
            seconds={this.timeForActivity()}
            onFinish={this.nextActivity}
          />
          <br/><br/><br/>
          <App.SettingsBtn/>
          <br/><br/><hr/><br/><br/>
          <App.PayMe/>
        </div>
      );
    }

  });

})();
