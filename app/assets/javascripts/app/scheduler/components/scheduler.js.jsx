(function () {
  'use strict';

  App.Scheduler = React.createClass({

    _save: function () {
      // this.props.collection.;
    },

    render: function () {
      return (
        <div className='scheduler-app'>
          <App.ScheduleDetails {...this.props.schedule} />
          <App.ExercisesTable exercises={this.props.exercises} />
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this._save}>
              Save
            </button>
          </div>
        </div>
      );
    }

  });

})();
