class Tab < ActiveRecord::Base
  attr_accessible :song, :artist, :url, :sessions_completed, :total_minutes
end
