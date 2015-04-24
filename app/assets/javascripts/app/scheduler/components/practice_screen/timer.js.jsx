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
      this.setState({ timer: null, last_tick: null });
    },

    tick: function () {
      var total_time = this.state.last_tick ? Date.now() - this.state.last_tick : 0;
      this.setState({
        elapsed: this.state.elapsed + total_time,
        last_tick: Date.now()
      });

      if (total_time > this.props.time * 1000) {
        this.endTimer();
        this.props.onFinish();
      }
    },

    _renderPlay: function () {
      return <i className='fa fa-2x fa-play play-or-pause' onClick={this.startTimer}></i>;
    },

    _renderPause: function () {
      return <i className='fa fa-2x fa-pause play-or-pause' onClick={this.endTimer}></i>;
    },

    render: function () {
      var elapsed_str = Math.round(this.props.time - (this.state.elapsed / 1000));

      return (
        <div className='text-center'>
          <h1>{this.props.title}</h1>
          <div className='activity-timer'>
            <h3>{elapsed_str}</h3>
            <img src='/assets/clock.jpg'/>
          </div>
          <br/>
          {_.isNumber(this.state.timer) ? this._renderPause() : this._renderPlay()}
        </div>
      );
    }

  });

})();
