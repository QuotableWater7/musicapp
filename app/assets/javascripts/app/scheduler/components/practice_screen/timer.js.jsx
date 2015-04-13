(function () {
  'use strict';

  App.Timer = React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      duration: React.PropTypes.number.isRequired
    },

    getInitialState: function () {
      return { elapsed: 0, start_time: Date.now() };
    },

    componentDidMount: function () {
      this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function () {
      clearInterval(this.timer);
    },

    tick: function () {
      this.setState({ elapsed: new Date() - this.state.start_time })
    },

    render: function () {
      var elapsed_str = (this.state.elapsed / 1000).toFixed(0);

      return (
        <div>
          <h1>Current Activity: {this.props.title}</h1>
          <h3 className='activity-timer'>
            {elapsed_str} of {this.props.duration}
          </h3>
        </div>
      );
    }

  });

})();
