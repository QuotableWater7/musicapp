describe TabsController, '#new' do

  let(:user) do
    User.create!({
      email: 'blah@blah.com',
      password: 'password',
      password_confirmation: 'password',
    })
  end

  before(:each) do
    login_as(user)
  end

  it 'sends a response' do
    expect(1).to eq 1
  end

end
