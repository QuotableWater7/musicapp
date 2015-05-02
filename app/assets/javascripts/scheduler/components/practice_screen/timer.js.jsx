(function () {
  'use strict';

  App.Timer = React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      seconds: React.PropTypes.number.isRequired,
      onFinish: React.PropTypes.func
    },

    getInitialState: function () {
      return { elapsed: 0, timer: null, last_tick: null };
    },

    componentWillReceiveProps: function () {
      this.endTimer();
      this.setState(this.getInitialState());
    },

    componentWillUnmount: function () {
      this.endTimer();
    },

    startTimer: function () {
      this.setState({ timer: setInterval(this.tick, 50) });
    },

    endTimer: function () {
      clearInterval(this.state.timer);
    },

    pauseTimer: function () {
      this.endTimer();
      this.setState({ timer: null, last_tick: null });
    },

    totalSeconds: function () {
      return Math.round(this.props.seconds / 15)*15;
    },

    tick: function () {
      var total_time = this.state.last_tick ? Date.now() - this.state.last_tick : 0;
      var elapsed = this.state.elapsed + total_time;

      if (elapsed > this.totalSeconds() * 1000) {
        this.endTimer();
        this.props.onFinish();
      } else {
        this.setState({
          elapsed: this.state.elapsed + total_time,
          last_tick: Date.now()
        });
      }
    },

    _renderPlay: function () {
      return (
        <div className='btn btn-success' onClick={this.startTimer}>
          Begin&nbsp;&nbsp;
          <i className='fa fa-play play-or-pause'></i>
        </div>
      );
    },

    _renderPause: function () {
      return (
        <div className='btn btn-danger' onClick={this.pauseTimer}>
          Pause&nbsp;&nbsp;
          <i className='fa fa-pause play-or-pause'></i>
        </div>
      );
    },

    stringForDisplay: function () {
      var time_remaining = Math.round(this.totalSeconds() - (this.state.elapsed / 1000));
      var duration = moment.duration(time_remaining, 'seconds');
      var hours = Math.floor(duration.asHours());
      var minutes_and_seconds = moment.utc(duration.asMilliseconds()).format("mm:ss");
      return hours > 0 ? hours + ':' + minutes_and_seconds : minutes_and_seconds;
    },

    render: function () {
      return (
        <div className='text-center'>
          <h1>{this.props.title}</h1>
          <div className='activity-timer'>
            <h3>{this.stringForDisplay()}</h3>
            <img src='/assets/clock.jpg'/>
          </div>
          <br/>
          {_.isNumber(this.state.timer) ? this._renderPause() : this._renderPlay()}
        </div>
      );
    }

  });

})();
