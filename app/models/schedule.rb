class Schedule < ActiveRecord::Base

  belongs_to :user

  has_many :exercises

  validates :name, :duration, :break_time, presence: true

  def as_json(*)
    {
      id: id,
      name: name,
      duration: duration,
      break_time: break_time,
      current_view: current_view
    }
  end

end
