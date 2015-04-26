RSpec.describe 'schedule can save' do

  load_flows

  before(:each) do
    new_user_flow.create_user
  end

  it 'saves changes made to the schedule' do
    select '300', from: 'duration'
    click_link 'Add'
    expect(find('tbody tr').length).to eq 1
  end

end
