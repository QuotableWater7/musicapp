(function () {
  'use strict';

  App.Scheduler = React.createClass({

    render: function () {
      return (
        <div className='scheduler-app'>
          <h1>Scheduler App</h1>
          <App.ExercisesTable {...this.props.tableData}/>
        </div>
      );
    }

  });

})();
