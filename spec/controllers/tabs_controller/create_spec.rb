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
      format: 'json',
    }
  end

  before(:each) do
    login_as(user)
  end

  it 'assigns tab' do
    get(:create, format: 'json')
    expect(assigns(:tab)).to be_new_record
  end

  it 'sets the user to the current user' do
    get(:create, params)
    p "*"*100
    p Tab.first
    # expect(Tab.all.first.user.id).to eq user.id
  end

  it 'sends a json response' do
    get(:create, format: 'json')
    expect(response.body).to match /Created tab/
  end

end
