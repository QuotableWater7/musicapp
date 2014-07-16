ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!

  config.before(:each) do
    # DatabaseCleaner.start
    User.all.each do |user|
      user.destroy!
    end
  end

  config.after(:each) do
    # DatabaseCleaner.clean
    User.all.each do |user|
      user.destroy!
    end
  end

  config.prepend_before(:each, type: :feature) do
    # DatabaseCleaner.strategy = :truncation
  end

  config.append_after(:each, type: :feature) do
    # DatabaseCleaner.strategy = :transaction
  end
end


def login_as(user)
  session[:remember_token] = user.remember_token
end
