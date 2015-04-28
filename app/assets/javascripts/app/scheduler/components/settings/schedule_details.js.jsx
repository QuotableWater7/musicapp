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
        return <option key={val} value={val}>{val} min</option>;
      }.bind(this));
    },

    render: function () {
      return (
        <div className='time-setter'>
          <div className='text-center'>
            <input
              type='text'
              className='header-input text-center'
              name='name'
              value={this.props.name}
              onChange={this._changeState}
            />
          </div>
          <div className='total-time text-center'>
            <select name='duration' value={parseInt(this.state.duration)} onChange={this._changeState}>
              {this._renderOptions(15, 30, 45, 60, 90, 120, 150, 300)}
            </select>
          </div>
        </div>
      );
    }

  });

})();