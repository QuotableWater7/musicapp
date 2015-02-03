(function () {
  'use strict';

  App.ScheduleConfig = React.createClass({

    _continue: function () {
      App.events.publish('scheduler.continue');
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
