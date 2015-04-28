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
