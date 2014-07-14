module SessionsHelper
  def sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:remember_token] = remember_token
    user.update_attribute(:remember_token, User.digest(remember_token))
    self.current_user = user
  end

  def sign_out
    token = User.digest(User.new_remember_token)
    current_user.update_attribute(:remember_token, token)
    cookies.delete(:remember_token)
    self.current_user = nil
  end

  def current_user=(user)
    @current_user = user
  end

  def current_user
    remember_token = User.digest(cookies[:remember_token])
    @current_user ||= User.find_by(remember_token: remember_token)
  end

  def require_login
    unless current_user
      flash.now[:error] = 'You must be logged in to view that page'
      render new_session_path
    end
  end
end