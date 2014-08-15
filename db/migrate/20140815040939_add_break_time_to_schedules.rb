class AddBreakTimeToSchedules < ActiveRecord::Migration
  def change
    add_column :schedules, :break_time, :integer, default: 300
  end
end
