(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    _remove: function () {
      this.props.model.destroy();
    },

    render: function () {
      return (
        <tr>
          <td contentEditable='true'>
            {this.props.model.get('name')}
          </td>
          <td contentEditable='true'>
            {this.props.model.get('importance')}
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
