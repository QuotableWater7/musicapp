class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation

  has_secure_password

  validates :email, presence: true
  validates :password, confirmation: true, length: { minimum: 8, maximum: 20 }
  validates :password_confirmation, presence: true
end
