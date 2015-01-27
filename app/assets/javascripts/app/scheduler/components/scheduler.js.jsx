(function () {
  'use strict';

  App.Scheduler = React.createClass({

    _save: function () {
      App.events.publish('scheduler.save');
    },

    _continue: function () {
      this._save();
    },

    render: function () {
      return (
        <div className='scheduler-app'>
          <App.ScheduleDetails {...this.props.schedule} />
          <App.ExercisesTable exercises={this.props.exercises} />
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this._continue}>
              Continue!
            </button>
          </div>
        </div>
      );
    }

  });

})();
