class ScheduleItems < ActiveRecord::Migration
  def change
    create_table :schedule_items do |t|
      t.integer :importance
      t.belongs_to :schedule
      t.belongs_to :activity

      t.timestamps
    end
  end
end
