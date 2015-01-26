(function () {
  'use strict';

  App.ScheduleDetails = React.createClass({

    render: function () {
      return (
        <div className='time-setter text-center'>
          <h1>Practice: {this.props.name}</h1>
          <label>
            Total Time: <input type='text' value={this.props.duration}/>
          </label>
        </div>
      );
    }

  });

})();
