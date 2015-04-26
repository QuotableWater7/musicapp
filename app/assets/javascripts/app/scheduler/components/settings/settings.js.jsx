(function () {
  'use strict';

  App.Settings = React.createClass({

    render: function () {
      return (
        <div className='scheduler-app col-md-8 col-md-offset-2'>
          <App.ScheduleDetails {...this.props.schedule} />
          <App.ExercisesTable exercises={this.props.schedule.exercises.toJSON()} />
        </div>
      );
    }

  });

})();
