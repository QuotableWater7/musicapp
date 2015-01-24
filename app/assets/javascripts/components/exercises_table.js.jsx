(function () {
  'use strict';

  App.ExercisesTable = React.createClass({

    _removeExercise: function (id) {
      this.props.remove(id);
    },

    _renderExercise: function (exercise) {
      return <App.ExerciseRow {...exercise}
        remove={this._removeExercise.bind(this, exercise.cid)}/>
    },

    _renderExercises: function () {
      return this.props.exercises.map(this._renderExercise);
    },

    _addModel: function () {
      this.props.add(new App.Models.Exercise());
    },

    render: function () {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Importance</th>
              <th>Duration</th>
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
