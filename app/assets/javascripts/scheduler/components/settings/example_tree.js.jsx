(function () {
  'use strict';

  App.ExampleTree = React.createClass({

    menu_data: {
      'Warm Ups': [
        {
          name: 'spider drill',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'chromatic scale',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'single string',
          notes: '',
          links: [],
          songs: []
        },
      ],
      Technique: [
        {
          name: 'alternate picking',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'economy picking',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'finger picking',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'all downstrokes',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'all upstrokes',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'bending strings',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'sliding',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'all downstrokes',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'palm muting',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'legato',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'pinch harmonics',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'hammer on / pull off',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'sweep picking',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'tapping',
          notes: '',
          links: [],
          songs: []
        }
      ],
      Arpeggios: [
        {
          name: 'triads',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'major 7th chords',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'major 6th chords',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: '9th chords',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'diminished chords',
          notes: '',
          links: [],
          songs: []
        }
      ],
      Scales: [
        {
          name: 'major',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'minor',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'harmonic minor',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'pentatonic',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'blues',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'dorian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'phrygian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'dorian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'lydian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'mixolydian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'aeolian',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: 'locrian',
          notes: '',
          links: [],
          songs: []
        }
      ],
      'Scale Sequences': [
        {
          name: '1 2 3',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: '1 2 b3',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: '5 6 8',
          notes: '',
          links: [],
          songs: []
        }
      ],
      'Chord Progressions': [
        {
          name: '1 4 5',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: '2 5 1',
          notes: '',
          links: [],
          songs: []
        },
        {
          name: '1 4 6 5',
          notes: '',
          links: [],
          songs: []
        }
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
        App.events.publish('exercise.create', {
          name: header + ': ' + item.name }
          );
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
