class ScheduleItem < ActiveRecord::Base

  belongs_to :schedule
  belongs_to :activity

  delegate :user, to: :schedule, null: true

  attr_accessible :activity, :importance

end
