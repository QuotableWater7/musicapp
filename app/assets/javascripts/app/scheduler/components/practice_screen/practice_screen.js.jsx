(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    _back: function () {
      App.events.publish('scheduler.back');
    },

    render: function () {
      return (
        <div className='practiceScreen'>
          <button className='btn btn-primary' onClick={this._back}>
            Back
          </button>
          This is the next screen to show!
        </div>
      );
    }

  });

})();
