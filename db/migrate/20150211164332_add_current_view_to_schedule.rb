class AddCurrentViewToSchedule < ActiveRecord::Migration
  def change
    add_column :schedules, :current_view, :string

    Schedule.all.each do |schedule|
      schedule.update_attributes!(current_view: 'Config')
    end
  end
end
