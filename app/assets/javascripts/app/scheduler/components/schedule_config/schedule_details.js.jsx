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

    _renderOptions: function () {
      var vals = Array.prototype.slice.call(arguments);
      return vals.map(function (val) {
        return <option value={val}>{val}</option>;
      }.bind(this));
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
          <div className='text-center'>
            <div className='total-time'>
              <select name='duration' value={parseInt(this.state.duration)} onChange={this._changeState}>
                {this._renderOptions(15, 30, 45, 60, 90, 120, 150, 300)}
              </select>
              &nbsp;min
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    }

  });

})();
