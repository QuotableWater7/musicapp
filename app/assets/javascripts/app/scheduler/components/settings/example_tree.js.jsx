(function () {
  'use strict';

  App.ExampleTree = React.createClass({

    menu_data: {
      Technique: ['all downstrokes', 'all upstrokes'],
      Theory: ['triads', 'major 7th chords', 'major 6th chords']
    },

    getInitialState: function () {
      return {};
    },

    toggleMenu: function (menu_name) {
      return function () {
        var update = {};
        update[menu_name] = !this.state[menu_name];
        this.setState(update);
      };
    },

    renderHeader: function (header) {
      return (
        <li onClick={this.toggleMenu(header.toLowerCase())}>{header}</li>
      );
    },

    renderHeaders: function () {
      var headers = Object.keys(this.menu_data);

      return headers.map(function (header) {
        return this.renderHeader(header);
      }.bind(this))
    },

    renderSubMenu: function () {

    },

    render: function () {
      return (
        <div className='col-md-2'>
          <ul className='unstyled-list'>
            {this.renderHeaders('Technique', 'Theory')}
          </ul>
        </div>
      );
    }

  });
})();
