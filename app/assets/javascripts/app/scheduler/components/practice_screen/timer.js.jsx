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
          <p>{this.props.time_left}</p>
        </div>
      );
    }

  });

})();
