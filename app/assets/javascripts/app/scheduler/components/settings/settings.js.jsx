(function () {
  'use strict';

  App.Settings = React.createClass({

    renderInfoMessage: function () {
      return (
        <div className='alert alert-info text-center'>
          <b>Note:</b> Choose exercises to practice and adjust the amount of time you
          would like to spend on them.  Then click the practice
          button at the bottom of the screen to begin!
        </div>
      );
    },

    render: function () {
      return (
        <div>
          <div className='col-md-3'>
            <br/><br/><br/><br/><br/>
            <App.ExampleTree/>
          </div>
          <div className='scheduler-app col-md-9'>
            {this.renderInfoMessage()}
            <App.ScheduleDetails {...this.props.schedule} />
            <br/>
            <App.ExercisesTable {...this.props.schedule} />
            <App.PracticeBtn/>
          </div>
          <br/>
        </div>
      );
    }

  });

})();
