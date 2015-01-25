class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :activities
  has_many :schedule_items

  validates :name, :duration, :break_time, presence: true

  attr_accessible :id, :name, :duration, :break_time

  def as_json
    {
      id: id,
      name: name,
      duration: duration,
      break_time: break_time,
    }
  end

end
