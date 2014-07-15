namespace :db do
  desc 'Add some dummy data'
  task :populate => :reset do
    fail 'Bad! No populate in production!' if Rails.env.production?
    user = User.create!(
      email: 'jbowler2400@gmail.com',
      password: 'guitar24',
      password_confirmation: 'guitar24',
    )

    Tab.create!(
      song: 'Under the Bridge',
      artist: 'Red Hot Chili Peppers',
      url: 'http://rhcp.com',
      sessions_completed: 35,
      total_minutes: 121,
      user: user,
    )

    Tab.create!(
      song: 'When the Levee Breaks',
      artist: 'Led Zeppelin',
      url: 'http://ledzeppelin.com',
      sessions_completed: 12,
      total_minutes: 200,
      user: user,
    )
  end
end
