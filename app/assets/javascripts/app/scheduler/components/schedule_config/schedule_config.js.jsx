(function () {
  'use strict';

  App.ScheduleConfig = React.createClass({

    render: function () {
      return (
        <div className='scheduler-app'>
          <App.ScheduleDetails {...this.props.schedule} />
          <App.ExercisesTable exercises={this.props.exercises} />
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this.props.continue}>
              Continue!
            </button>
          </div>
        </div>
      );
    }

  });

})();
