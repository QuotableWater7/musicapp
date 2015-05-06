(function () {
  'use strict';

  App.PracticeBtn = React.createClass({

    changeView: function () {
      App.events.publish('schedule.update', { current_view: 'practice' });
    },

    isDisabled: function () {
      return this.props.num_exercises === 0;
    },

    renderWarning: function () {
      if (!this.isDisabled()) { return false; }

      return (
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <br/>
            <div className='warning-text'>
              You must add items to practice before continuing!
            </div>
          </div>
        </div>
      );
    },

    render: function () {
      return (
        <div className='col-md-12 text-center'>
          <button
            className='btn btn-default btn-lg'
            onClick={this.changeView}
            disabled={this.isDisabled()}
          >
            Begin Practice <i className='fa fa-music'></i>
          </button>
          {this.renderWarning()}
        </div>
      );
    }

  });

})();
