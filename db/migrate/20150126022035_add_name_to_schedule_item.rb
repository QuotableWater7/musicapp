class AddNameToScheduleItem < ActiveRecord::Migration
  def change
    add_column :schedule_items, :name, :string
    remove_column :schedule_items, :activity
  end
end
