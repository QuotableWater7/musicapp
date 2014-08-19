class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

  attr_accessible :id, :name, :duration, :break_time

  def as_json
    {
      id: id,
      name: name,
      duration: duration,
      break_time: break_time,
      total_importance: total_importance,
    }
  end

  def total_importance
    schedule_items.sum(:importance)
  end

end
