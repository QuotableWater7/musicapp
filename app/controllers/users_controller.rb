class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.valid? && @user.save
      sign_in(@user)
      flash[:success] = "User with email #{@user.email} successfully created."
      redirect_to root_path
    else
      flash[:warning] = 'There was a problem creating the user.'
      render 'new'
    end
  end

end
