class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation

  has_secure_password

  validates_uniqueness_of :email

  validates :email, presence: true
  validates :password, length: { minimum: 8, maximum: 20 }
end
