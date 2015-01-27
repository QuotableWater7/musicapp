(function () {
  'use strict';

  App.ScheduleDetails = React.createClass({

    getInitialState: function() {
      return { duration: this.props.duration };
    },

    _bubbleChange: function () {
      this.setState({ duration: event.target.value });
      App.events.publish('schedule.update', this.state);
    },

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>{this.props.name}</h1>
          <label>
            Total Time:
            <input
              className='form-control'
              type='text'
              value={this.state.duration}
              onChange={this._bubbleChange}
            />
          </label>
          <br />
          <br />
        </div>
      );
    }

  });

})();
