(function () {
  'use strict';

  App.Timer = React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      time: React.PropTypes.number.isRequired,
      onFinish: React.PropTypes.func
    },

    getInitialState: function () {
      return { elapsed: 0 };
    },

    componentWillReceiveProps: function () {
      this.setState(this.getInitialState());
    },

    startTimer: function () {
      var start_time = Date.now();
      this.setState({ start_time: start_time });
      this.timer = setInterval(this.tick, 50);
    },

    endTimer: function () {
      clearInterval(this.timer);
    },

    tick: function () {
      var total_time = new Date() - this.state.start_time;
      this.setState({ elapsed: total_time });

      if (total_time > this.props.time * 1000) {
        this.endTimer();
        this.props.onFinish();
      }
    },

    render: function () {
      var elapsed_str = (this.state.elapsed / 1000).toFixed(0);

      return (
        <div className='text-center'>
          <h1>{this.props.title}</h1>
          <div className='btn btn-tertiary' onClick={this.startTimer}>Play</div>
          <br/><br/>
          <h3 className='activity-timer'>
            {elapsed_str}
          </h3>
        </div>
      );
    }

  });

})();
