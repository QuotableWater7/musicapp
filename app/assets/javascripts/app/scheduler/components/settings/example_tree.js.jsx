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
      Tapping: ['triads', '7th chords', 'chord transitions']
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
        return this.renderHeader(header);
      }.bind(this))
    },

    renderHeader: function (header) {
      var is_active_header = this.state[header];
      var klass = 'header ' + (is_active_header ? 'active' : '');

      return (
        <tbody key={header}>
          <tr onClick={this.toggleMenu(header)}>
            <td className={klass}>
              <strong>{header}</strong>
            </td>
          </tr>
          {is_active_header ? this.renderSubMenu(header) : null}
        </tbody>
      );
    },

    renderSubMenu: function (header, item) {
      return this.menu_data[header].map(function (item) {
        return (
          <tr>
            <td className='sub-item' onClick={this.addExercise(header, item)}>- {item}</td>
          </tr>
        );
      }.bind(this));
    },

    addExercise: function (header, item) {
      return function () {
        App.events.publish('exercise.create', { name: header + ' - ' + item });
      };
    },

    render: function () {
      return (
        <div>
          <table className='col-md-12 example-tree'>
            <thead>
              <tr>
                <td colspan='100' className='text-center'>
                  (click sub items to add)
                </td>
              </tr>
            </thead>
            {this.renderMenu()}
          </table>
        </div>
      );
    }

  });
})();
