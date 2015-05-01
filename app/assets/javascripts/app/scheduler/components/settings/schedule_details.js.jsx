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

    renderHeader: function () {
      return (
        <div className='text-center'>
          <App.PencilInput
            name='name'
            value={this.props.name}
            update={this._changeState}
            classes='header-input text-center'
          />
        </div>
      );
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
          {false ? this.renderHeader() : false}
          <div className='total-time text-center'>
            Practice Time:&nbsp;
            <select name='duration' value={parseInt(this.state.duration)} onChange={this._changeState}>
              {this._renderOptions(15, 30, 45, 60, 90, 120, 150, 300)}
            </select>
          </div>
        </div>
      );
    }

  });

})();
