(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    _remove: function () {
      this.props.model.trigger('remove');
    },

    render: function () {
      return (
        <tr>
          <td contentEditable='true'>
            {this.props.model.get('activity')}
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
