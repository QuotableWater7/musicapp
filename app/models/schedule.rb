class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

  attr_accessible :name, :duration

  def as_json
    schedule_items = ScheduleItem.where('schedule_id = ?', self.id)
  end

end
