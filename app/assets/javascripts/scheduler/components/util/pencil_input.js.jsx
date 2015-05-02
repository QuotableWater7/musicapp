(function () {
  'use strict';

  App.PencilInput = React.createClass({

    propTypes: {
      name: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      classes: React.PropTypes.string,
      update: React.PropTypes.func
    },

    fullClass: function () {
      return 'form-control' + ' ' + this.props.classes;
    },

    highlightAll: function (event) {
      event.target.select();
    },

    render: function () {
      return (
        <div className='pencil-input inner-addon right-addon'>
          <i className='fa fa-pencil'></i>
          <input
            type='text'
            name={this.props.name}
            className={this.fullClass()}
            value={this.props.value}
            onChange={this.props.update}
            onClick={this.highlightAll}
          />
        </div>
      );
    }

  });

})();
