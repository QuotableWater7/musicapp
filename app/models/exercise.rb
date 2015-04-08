class Exercise < ActiveRecord::Base

  belongs_to :schedule

  delegate :user, to: :schedule, null: true

end
