(function () {
  'use strict';

  App.Settings = React.createClass({

    render: function () {
      return (
        <div>
          <div className='col-md-3'>
            <br/><br/><br/><br/><br/>
            <App.ExampleTree/>
          </div>
          <div className='scheduler-app col-md-9'>
            <div className='alert alert-info text-center'>
              Choose exercises to practice and adjust the amount of time you
              would like to spend on them.  Then click the practice
              button at the bottom of the screen to begin!
            </div>
            <App.ScheduleDetails {...this.props.schedule} />
            <App.ExercisesTable {...this.props.schedule} />
            <App.PracticeBtn/>
          </div>
          <br/>
        </div>
      );
    }

  });

})();
