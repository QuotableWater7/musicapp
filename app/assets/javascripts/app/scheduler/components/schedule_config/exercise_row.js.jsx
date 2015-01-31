(function () {
  'use strict';

  App.ExerciseRow = React.createClass({

    getInitialState: function () {
      return this.props;
    },

    _remove: function () {
      App.events.publish('exercise.destroy', this.props.cid);
    },

    _changeState: function () {
      var new_state = {};
      new_state[event.target.name] = event.target.value;
      this.setState(new_state, this._notifyOfChange);
    },

    _notifyOfChange: function (event) {
      var changes = _.pick(this.state, 'name', 'importance');
      App.events.publish('exercise.' + this.props.cid + '.set', changes);
    },

    render: function () {
      return (
        <tr>
          <td>
            <input
              name='name'
              className='form-control exercise-input'
              type='text'
              value={this.state.name}
              onChange={this._changeState}
            />
          </td>
          <td>
            <input
              name='importance'
              className='form-control exercise-input'
              type='text'
              value={this.state.importance}
              onChange={this._changeState}
            />
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
