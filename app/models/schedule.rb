class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

end
