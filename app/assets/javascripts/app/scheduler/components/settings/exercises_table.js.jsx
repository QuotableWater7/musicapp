(function () {
  'use strict';

  App.ExercisesTable = React.createClass({

    _renderExercise: function (exercise) {
      var time = this.props.duration * (exercise.importance / this.props.total_importance);
      return <App.ExerciseRow key={exercise.cid} {...exercise} time={time} />
    },

    _renderExercises: function () {
      return this.props.exercises.toJSON().map(this._renderExercise);
    },

    _addModel: function () {
      App.events.publish('exercise.create');
    },

    render: function () {
      return (
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th className='activity col-sm-5'>Category</th>
              <th className='importance text-center col-sm-4'>Focus Level</th>
              <th className='col-md-2 text-center'>Min</th>
              <th className='text-right col-sm-1'>
              </th>
            </tr>
          </thead>
          <tbody>
            {this._renderExercises()}
          </tbody>
          <tbody>
            <tr>
              <td
                colSpan={100}
                className='btn-sm btn-link text-center table-add-btn'
                onClick={this._addModel}
              >
                Add
              </td>
            </tr>
          </tbody>
        </table>
      );
    }

  });

})();
