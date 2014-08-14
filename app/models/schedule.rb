class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

  attr_accessible :name, :duration

  def as_json
    columns = 'schedule_items.id, schedule_items.importance, activities.name'
    schedule_items = ScheduleItem.select(columns)
      .where('schedule_id = ?', self.id)
      .joins(:activity)

    {
      name: name,
      duration: duration,
      schedule_items: schedule_items,
    }
  end

end
