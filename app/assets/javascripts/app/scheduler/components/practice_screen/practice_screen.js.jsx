(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    render: function () {
      return (
        <div className='practiceScreen'>
          <button className='btn btn-primary' onClick={this.props.back}>
            Config
          </button>
          <div className='activity-name'><h3>Activity Name</h3></div>
          <br/>
          <App.Timer/>
        </div>
      );
    }

  });

})();
