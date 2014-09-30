class PagesController < ApplicationController
  before_filter :require_login, only: [:app]

end
