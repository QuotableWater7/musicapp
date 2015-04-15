class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :exercises

  validates :name, :duration, :break_time, presence: true

end
