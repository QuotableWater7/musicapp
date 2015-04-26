ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'rspec/autorun'
require 'database_cleaner'
include SessionsHelper

Dir[Rails.root.join('spec/support/*.rb')].each { |file| require file }

Capybara.default_driver = :selenium

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!

  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each, :js => true) do
    DatabaseCleaner.strategy = :truncation
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end

def load_flows
  Dir[Rails.root.join('spec/support/feature_flows/*.rb')].each do |filename|
    snake_file = File.basename(filename, '.*')
    let(snake_file.to_sym) { snake_file.camelize.constantize.new }
  end
end
