(function () {
  'use strict';

  App.Scheduler = React.createClass({

    render: function () {
      return (
        <div className='scheduler-app'>
          <h1>Scheduler App</h1>
          <App.ExercisesTable collection={this.props.collection}/>
          <div className='text-center'>
            <button className='btn btn-primary'>Save</button>
          </div>
        </div>
      );
    }

  });

})();
