(function () {
  'use strict';

  App.Settings = React.createClass({

    render: function () {
      return (
        <div>
          <App.ExampleTree/>
          <div className='scheduler-app col-md-8'>
            <App.ScheduleDetails {...this.props.schedule} />
            <App.ExercisesTable exercises={this.props.schedule.exercises.toJSON()} />
          </div>
        </div>
      );
    }

  });

})();
