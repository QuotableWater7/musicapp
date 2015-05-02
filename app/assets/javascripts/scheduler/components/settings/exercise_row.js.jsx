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
            <App.PencilInput
              name='name'
              value={this.state.name}
              update={this._changeState}
            />
          </td>
          <td>
            <input
              className='importance-slider'
              type='range'
              name='importance'
              min={1}
              max={100}
              step={1}
              value={this.props.importance}
              onChange={this._changeState}
            />
          </td>
          <td className='text-center'>{Math.round(this.props.time)}</td>
          <td className='text-center remove-row' onClick={this._remove}>
            <i className='fa fa-remove'></i>
          </td>
        </tr>
      );
    }

  });

})();
