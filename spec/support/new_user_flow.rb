class NewUserFlow < FeatureFlow

  def create_user
    visit '/'
    click_link 'Sign Up'

    fill_in 'user_email', with: 'test@test.com'
    fill_in 'user_password', with: 'pizza123'
    fill_in 'user_password_confirmation', with: 'pizza123'

    click_button 'Create Account'
    expect(page).to have_content 'successfully created'

    click_link 'App'
    expect(page).to have_content 'Focus Level'
  end

end
