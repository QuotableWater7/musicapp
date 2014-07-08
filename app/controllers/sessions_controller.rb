class SessionsController < ApplicationController

  def new

  end

  def create
    flash[:success] = 'You have successfully tried logging in'
    redirect_to root_path
  end

  def destroy
    flash[:success] = 'You have successfully attempted to log out.'
    redirect_to root_path
  end

end
