(function () {
  'use strict';

  App.ExercisesTable = React.createClass({

    _renderExercises: function () {
      var exercises = [];
      _.times(3, function () {
        exercises.push(<App.ExerciseRow />);
      });

      return exercises;
    },

    render: function () {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Importance</th>
              <th>Length of Time</th>
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
