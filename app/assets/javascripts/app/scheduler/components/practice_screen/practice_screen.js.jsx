(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    render: function () {
      return (
        <div className='practiceScreen'>
          <button className='btn btn-primary' onClick={this.props.back}>
            Back
          </button>
          This is the next screen to show!
        </div>
      );
    }

  });

})();
