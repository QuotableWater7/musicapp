(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    render: function () {
      return (
        <tr>
          <td contentEditable='true'>
            {this.props.activity}
          </td>
          <td contentEditable='true'>
            {this.props.importance}
          </td>
          <td contentEditable='true'>
            <button className='btn btn-primary'
              onClick={this.props.remove}>
              -
            </button>
          </td>
        </tr>
      );
    }

  });

})();
