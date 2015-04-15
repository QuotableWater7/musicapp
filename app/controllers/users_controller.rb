class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.valid? && @user.save
      sign_in(@user)
      flash[:success] = "User with email #{@user.email} successfully created."
      redirect_to root_path
    else
      flash[:warning] = 'There was a problem creating the user.'
      render 'new'
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
