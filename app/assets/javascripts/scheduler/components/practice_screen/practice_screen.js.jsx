(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    _separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    exerciseIdx: function () {
      return this.props.exercise_idx;
    },

    currentActivity: function () {
      return this.props.exercises.at([this.exerciseIdx()]);
    },

    prevActivity: function () {
      var num_exercises = this.props.num_exercises;
      var next_index = this.exerciseIdx() - 1;
      next_index = next_index < 0 ? next_index + num_exercises : next_index;
      App.events.publish('schedule.update', { exercise_idx: next_index });
    },

    nextActivity: function () {
      var num_exercises = this.props.num_exercises;
      var update_data = { exercise_idx: (this.exerciseIdx() + 1) % num_exercises };
      App.events.publish('schedule.update', update_data);
    },

    timeForActivity: function () {
      var schedule_time = this.props.seconds;
      var total_importance = this.props.total_importance;
      var activity_importance = this.currentActivity().get('importance');

      return Math.round(schedule_time * activity_importance / total_importance);
    },

    title: function () {
      var currIdx = this.exerciseIdx() + 1;
      var total_exercises = this.props.num_exercises;
      var progress = '(' + currIdx + '/' + total_exercises + ')';
      return [progress, this.currentActivity().get('name')].join(' ');
    },

    renderActivityChangeButtons: function () {
      return (
        <div className='col-md-12 text-center'>
          <span className='btn btn-default' onClick={this.prevActivity}>
            &lt;&lt;
          </span>
          {this._separator()}
          <span className='btn btn-default' onClick={this.nextActivity}>
            &gt;&gt;
          </span>
        </div>
      );
    },

    render: function () {
      var current_activity_props = this.currentActivity().toJSON();

      return (
        <div className='practiceScreen'>
          {this.renderActivityChangeButtons()}
          <br/><br/>
          <App.Timer
            title={this.title()}
            seconds={this.timeForActivity()}
            onFinish={this.nextActivity}
          />
          <App.NoteEditor {...current_activity_props}/>
          <App.SettingsBtn/>
          <App.PayMe/>
        </div>
      );
    }

  });

})();
