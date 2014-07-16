describe TabsController, '#create' do

  let(:user) do
    User.create!({
      email: 'blah@blah.com',
      password: 'password',
      password_confirmation: 'password',
    })
  end

  let(:params) do
    {
      song: 'song',
      artist: 'artist',
      url: 'url',
      sessions_completed: 4,
      total_minutes: 10,
    }
  end

  before(:each) do
    sign_in(user)
    get(:create, format: 'json', tab: params)
  end

  it 'creates a new tab' do
    expect(Tab.all.count).to eq 1
  end

  it 'sets the tab user to the current user' do
    expect(Tab.all.first.user.id).to eq user.id
  end

  it 'sends a json response' do
    expect(response.body).to match /Created tab /
  end

end
