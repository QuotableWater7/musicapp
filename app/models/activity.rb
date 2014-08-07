class Activity < ActiveRecord::Base

  attr_accessible :name, :description

  has_many :schedule_items
end
