(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    _remove: function () {
      App.events.publish('exercise.destroy', this.props.cid);
    },

    render: function () {
      return (
        <tr>
          <td contentEditable='true'>
            {this.props.name}
          </td>
          <td contentEditable='true'>
            {this.props.importance}
          </td>
          <td>
            <button className='btn btn-delete'
              onClick={this._remove}>
              -
            </button>
          </td>
        </tr>
      );
    }

  });

})();
