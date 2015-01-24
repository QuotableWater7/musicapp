(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    render: function () {
      return (
        <tr>
          <td contenteditable='true'>{this.props.activity}</td>
          <td contenteditable='true'>{this.props.importance}</td>
          <td contenteditable='true'>5</td>
          <td contenteditable='true'>
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
