(function () {
  'use strict';

  App.ExercisesTable = React.createClass({

    componentDidMount: function () {
      this.props.collection.on('add remove', this.forceUpdate.bind(this, null));
    },

    _renderExercise: function (exercise) {
      return <App.ExerciseRow
        model={exercise} remove={this.props.collection.remove.bind(this.props.collection)} />
    },

    _renderExercises: function () {
      return this.props.collection.map(this._renderExercise);
    },

    _addModel: function () {
      this.props.collection.create();
    },

    render: function () {
      console.log('collection', this.props.collection);
      return (
        <table className='table'>
          <thead>
            <tr>
              <th className='activity'>Activity</th>
              <th className='importance'>Importance</th>
              <th>
                <button
                  className='btn btn-tertiary'
                  onClick={this._addModel}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
          {this._renderExercises()}
          </tbody>
        </table>
      );
    }

  });

})();
