(function () {
  'use strict';

  App.Timer = React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      time_left: React.PropTypes.number.isRequired
    },

    render: function () {
      return (
        <div>
          <h1>Current Activity: {this.props.title}</h1>
          <h3 className='activity-timer'>{this.props.time_left}</h3>
        </div>
      );
    }

  });

})();
