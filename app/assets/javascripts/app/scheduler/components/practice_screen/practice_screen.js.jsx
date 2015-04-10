(function () {
  'use strict';

  App.PracticeScreen = React.createClass({

    _separator: function () {
      return <span>&nbsp;&nbsp;</span>;
    },

    render: function () {
      return (
        <div className='practiceScreen'>
          <div className='col-md-12 text-center'>
            <span className='btn btn-secondary'>&lt;&lt;</span>
            {this._separator()}
            <span className='btn btn-secondary'>&gt;&gt;</span>
          </div>
          <br/>
          <App.Timer/>
        </div>
      );
    }

  });

})();
