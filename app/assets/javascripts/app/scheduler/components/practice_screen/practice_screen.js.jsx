(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    render: function () {
      return (
        <div className='practiceScreen'>
          <div className='activity-name'><h3>Activity Name</h3></div>
          <br/>
          <App.Timer/>
        </div>
      );
    }

  });

})();
