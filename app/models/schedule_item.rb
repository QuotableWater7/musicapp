class ScheduleItem < ActiveRecord::Base

  belongs_to :schedule
  belongs_to :activity
  belongs_to :user, through: :schedule

end
