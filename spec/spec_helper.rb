ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end

  config.prepend_before(:each, type: :feature) do
    DatabaseCleaner.strategy = :truncation
  end

  config.append_after(:each, type: :feature) do
    DatabaseCleaner.strategy = :transaction
  end
end


def login_as(user)
  puts "*" * 100
  puts user.remember_token
  session[:remember_token] = user.remember_token
end
