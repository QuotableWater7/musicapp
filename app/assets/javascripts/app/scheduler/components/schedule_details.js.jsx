(function () {
  'use strict';

  App.ScheduleDetails = React.createClass({

    getInitialState: function() {
      return { duration: this.props.duration };
    },

    _update: function (event) {
      this.setState({ duration: event.target.value });
    },

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>{this.props.name}</h1>
          <label>
            Total Time:
            <input
              type='text'
              value={this.state.duration}
              onChange={this._update}
            />
          </label>
          <br />
          <br />
        </div>
      );
    }

  });

})();
