class RenameScheduleItemsToExercises < ActiveRecord::Migration
  def change
    rename_table :schedule_items, :exercises
  end
end
