(function () {
  'use strict';

  App.Scheduler = React.createClass({

    componentDidMount: function () {
      var self = this;

      this.props.collection.fetch({
        success: function () { self.forceUpdate(); },
        error: function () { }
      });
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
