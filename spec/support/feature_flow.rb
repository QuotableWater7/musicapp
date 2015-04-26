class FeatureFlow

  include RSpec::Matchers
  include RSpec::Mocks::ExampleMethods
  include Capybara::DSL

end

Dir[File.join(__dir__, 'feature_flows', '*.rb')].each { |file| require file }
