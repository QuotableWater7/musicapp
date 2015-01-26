(function () {
  'use strict';

  App.ScheduleDetails = React.createClass({

    _schedule: function () {
      return this.props.model;
    },

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>{this._schedule().get('name')}</h1>
          <label>
            Total Time: <input type='text' value={this._schedule().get('duration')}/>
          </label>
          <br />
          <br />
        </div>
      );
    }

  });

})();
