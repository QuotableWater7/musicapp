class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

  attr_accessible :name, :duration

  def as_json
    schedule_items = ScheduleItem.select('schedule_items.importance, activities.name')
      .where('schedule_id = ?', self.id)
      .joins(:activity)

    {
      name: name,
      total_time: duration,
      schedule_items: schedule_items,
    }
  end

end
