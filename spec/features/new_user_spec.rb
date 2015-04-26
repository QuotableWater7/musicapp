RSpec.describe 'basic signup stuff' do

  load_flows

  it 'allows a user to sign up' do
    new_user_flow.create_user
  end

end
