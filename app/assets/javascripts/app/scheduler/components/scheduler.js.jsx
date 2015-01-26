(function () {
  'use strict';

  App.Scheduler = React.createClass({

    componentDidMount: function () {
      var self = this;

      this._exercises().fetch({
        success: function () { self.forceUpdate(); },
        error: function () { }
      });
    },

    _schedule: function () {
      return this.props.schedule;
    },

    _exercises: function () {
      return this._schedule().get('exercises');
    },

    _save: function () {
      // this.props.collection.;
    },

    render: function () {
      return (
        <div className='scheduler-app'>
          <App.ScheduleDetails model={this._schedule()} />
          <App.ExercisesTable collection={this._exercises()} />
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
