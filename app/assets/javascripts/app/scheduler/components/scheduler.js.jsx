(function () {
  'use strict';

  App.Scheduler = React.createClass({

    componentDidMount: function () {
      this.props.collection.fetch({success: function () {
        console.log(arguments);
      }, error: function () { console.log(arguments); }});
    },

    _save: function () {
      // this.props.collection.;
    },

    render: function () {
      return (
        <div className='scheduler-app'>
          <h1>Scheduler App</h1>
          <App.ExercisesTable collection={this.props.collection}/>
          <div className='text-center'>
            <button className='btn btn-primary' onClick={this._save}>
              Save
            </button>
          </div>
        </div>
      );
    }

  });

})();
