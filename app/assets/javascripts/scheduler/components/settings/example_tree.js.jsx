(function () {
  'use strict';

  App.ExampleTree = React.createClass({

    menu_data: {
      'Warm Ups': [
        { name: 'spider drill', notes: '' },
        { name: 'chromatic scale', notes: '' },
        { name: 'single string', notes: ''},
      ],
      Technique: [
        { name: 'alternate picking', notes: '' },
        { name: 'economy picking', notes: '' },
        { name: 'finger picking', notes: '' },
        { name: 'all downstrokes', notes: '' },
        { name: 'all upstrokes', notes: '' },
        { name: 'bending strings', notes: '' },
        { name: 'sliding', notes: '' },
        { name: 'all downstrokes', notes: '' },
        { name: 'palm muting', notes: '' },
        { name: 'legato', notes: '' },
        { name: 'pinch harmonics', notes: '' },
        { name: 'hammer on / pull off', notes: '' },
        { name: 'sweep picking', notes: '' },
        { name: 'tapping', notes: '' }
      ],
      Arpeggios: [
        { name: 'triads', notes: '' },
        { name: 'major 7th chords', notes: '' },
        { name: 'major 6th chords', notes: '' },
        { name: '9th chords', notes: '' },
        { name: 'diminished chords', notes: '' }
      ],
      Scales: [
        { name: 'major', notes: '' },
        { name: 'minor', notes: '' },
        { name: 'harmonic minor', notes: '' },
        { name: 'pentatonic', notes: '' },
        { name: 'blues', notes: '' },
        { name: 'dorian', notes: '' },
        { name: 'phrygian', notes: '' },
        { name: 'dorian', notes: '' },
        { name: 'lydian', notes: '' },
        { name: 'mixolydian', notes: '' },
        { name: 'aeolian', notes: '' },
        { name: 'locrian', notes: '' }
      ],
      'Scale Sequences': [
        { name: '1 2 3', notes: '' },
        { name: '1 2 b3', notes: '' },
        { name: '5 6 8', notes: '' }
      ],
      'Chord Progressions': [
        { name: '1 4 5', notes: '' },
        { name: '2 5 1', notes: '' },
        { name: '1 4 6 5', notes: '' }
      ],
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
        App.events.publish('exercise.create', { name: header + ': ' + item.name });
      };
    },

    render: function () {
      return (
        <div>
          <table className='col-md-12 example-tree'>
            <thead>
              <tr>
                <td colSpan='100' className='text-center'>
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
