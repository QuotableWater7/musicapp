(function () {
  'use strict';

  App.Settings = React.createClass({

    render: function () {
      return (
        <div className='scheduler-app'>
          <App.ScheduleDetails {...this.props.schedule} />
          <App.ExercisesTable exercises={this.props.schedule.exercises.toJSON()} />
        </div>
      );
    }

  });

})();
