(function () {
  'use strict';

  App.ExercisesTable = React.createClass({

    _renderExercise: function (exercise) {
      return <App.ExerciseRow key={exercise.cid} {...exercise} />
    },

    _renderExercises: function () {
      return this.props.exercises.map(this._renderExercise);
    },

    _addModel: function () {
      App.events.publish('exercise.create');
    },

    render: function () {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th className='activity'>Activity</th>
              <th className='importance'>Importance</th>
              <th className='text-right'>
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
