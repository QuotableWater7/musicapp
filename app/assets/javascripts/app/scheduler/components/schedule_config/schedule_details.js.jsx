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
          <div className='text-center'>
            <div className='total-time'>
              <select>
                <option>15</option>
                <option>30</option>
                <option>45</option>
                <option>60</option>
                <option>90</option>
                <option>120</option>
                <option>150</option>
                <option>300</option>
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
