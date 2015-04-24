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
        <div className='col-sm-10 col-md-offset-1'>
          <table className='table'>
            <thead>
              <tr>
                <th className='activity col-sm-6'>Activity</th>
                <th className='importance text-center col-sm-4'>Importance</th>
                <th className='text-right col-sm-2'>
                  <button
                    className='btn btn-link'
                    onClick={this._addModel}>
                    Add
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
            {this._renderExercises()}
            </tbody>
          </table>
        </div>
      );
    }

  });

})();
