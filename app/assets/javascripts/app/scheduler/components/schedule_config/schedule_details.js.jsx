(function () {
  'use strict';

  App.ScheduleDetails = React.createClass({

    getInitialState: function() {
      return { duration: this.props.duration };
    },

    _publishUpdate: function () {
      App.events.publish('schedule.update', this.state);
    },

    _changeState: function () {
      this.setState({ duration: event.target.value }, this._publishUpdate);
    },

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>{this.props.name}</h1>
          <div className='total-time'>
            <input
              className='exercise-input text-center'
              type='text'
              value={this.state.duration}
              onChange={this._changeState}
            />
            &nbsp;min
          </div>
          <br />
          <br />
        </div>
      );
    }

  });

})();
