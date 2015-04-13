(function () {
  'use strict';

  App.Timer = React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      time: React.PropTypes.number.isRequired
    },

    getInitialState: function () {
      return { elapsed: 0, start_time: Date.now() };
    },

    componentDidMount: function () {
      this.startTimer();
    },

    componentWillUnmount: function () {
      this.endTimer();
    },

    componentWillReceiveProps: function () {
      this.setState(this.getInitialState());
    },

    startTimer: function () {
      this.timer = setInterval(this.tick, 50);
    },

    endTimer: function () {
      clearInterval(this.timer);
    },

    tick: function () {
      var total_time = new Date() - this.state.start_time;
      this.setState({ elapsed: total_time });

      if (total_time > this.props.time * 1000) {
        console.log('time is up!');
        this.endTimer();
      }
    },

    render: function () {
      var elapsed_str = (this.state.elapsed / 1000).toFixed(0);

      return (
        <div>
          <h1>Current Activity: {this.props.title}</h1>
          <h3 className='activity-timer'>
            {elapsed_str} of {this.props.time}
          </h3>
        </div>
      );
    }

  });

})();
