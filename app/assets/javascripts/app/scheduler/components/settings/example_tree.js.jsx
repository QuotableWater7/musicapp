(function () {
  'use strict';

  App.ExampleTree = React.createClass({

    menu_data: {
      'Warm Ups': ['chromatic scale', 'swing rhythm', 'strumming patterns'],
      Technique: [
        'all downstrokes', 'all upstrokes', 'alternate picking',
        'economy picking', 'bending strings', 'sliding', 'legato'
      ],
      Theory: [
        'triads', 'major 7th chords', 'major 6th chords'
      ],
      'Scale Sequences': ['1 2 3', '1 2 b3', '5 6 8'],
      'Chord Progressions': ['I IV V', 'ii V I', 'I VI V IV'],
      Tapping: ['trids', '7th chords', 'chord transitions']
    },

    getInitialState: function () {
      return {};
    },

    toggleMenu: function (menu_name) {
      return function () {
        var update = {};
        update[menu_name] = !this.state[menu_name];
        this.setState(update);
      }.bind(this);
    },

    renderMenu: function () {
      var headers = Object.keys(this.menu_data);

      return headers.map(function (header) {
        return this.renderGroup(header);
      }.bind(this))
    },

    renderGroup: function (header) {
      return (
        <tbody>
          <tr onClick={this.toggleMenu(header)}>
            <td className='header'>
              <strong>{header}</strong>
            </td>
          </tr>
          {this.state[header] ? this.menu_data[header].map(this.renderSubItem) : null}
        </tbody>
      );
    },

    renderSubItem: function (item) {
      return <tr><td className='sub-item'>- {item}</td></tr>;
    },

    render: function () {
      return (
        <table className='col-md-12 example-tree'>
          {this.renderMenu()}
        </table>
      );
    }

  });
})();
