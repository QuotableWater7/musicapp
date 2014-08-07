# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

activities = [
  {
    name: 'Warm Up',
    description: 'Metronome to 60BPM, all 2-finger combinations',
  },
  {
    name: 'Intervals',
    description: 'Intervals on various strings, hum along to the pitch',
  },
  {
    name: 'Arpeggios',
    description: 'Triads, Suspended 2/4, Sevenths, Sixths, etc',
  },
  {
    name: 'Chords',
    description: '2,3,4,5,6 string chords, all types',
  },
  {
    name: 'Legato',
    description: 'Hammer on and pull off with all finger combos',
  },
  {
    name: 'Blues',
    description: 'Pentatonic Licks, Blues scale in all positions',
  },
  {
    name: 'Speed',
    description: 'Pick simple repeating lick and increase in tempo until fast',
  },
]

activities.each { |activity| Activity.create!(activity) }
