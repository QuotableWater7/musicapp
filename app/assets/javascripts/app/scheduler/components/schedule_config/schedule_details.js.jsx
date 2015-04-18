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
      var data = {};
      data[event.target.name] = event.target.value;
      this.setState(data, this._publishUpdate);
    },

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>
            <input
              type='text'
              className='exercise-input text-center'
              name='name'
              value={this.props.name}
              onChange={this._changeState}
            />
          </h1>
          <div className='total-time'>
            <input
              type='text'
              className='exercise-input text-center'
              name='duration'
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
