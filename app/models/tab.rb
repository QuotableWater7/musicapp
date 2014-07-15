class Tab < ActiveRecord::Base
  attr_accessible :song, :artist, :url, :sessions_completed, :total_minutes, :user

  belongs_to :user

  validates :user, presence: true
end
