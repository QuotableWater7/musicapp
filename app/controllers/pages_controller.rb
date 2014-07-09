class PagesController < ApplicationController
  before_filter :require_login, only: [:app]

  def index
  end

  def about
  end

  def app
  end

end
