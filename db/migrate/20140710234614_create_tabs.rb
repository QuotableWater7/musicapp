class CreateTabs < ActiveRecord::Migration
  def change
    create_table :tabs do |t|
      t.string :song
      t.string :artist
      t.string :url
      t.integer :sessions_completed
      t.integer :total_minutes

      t.timestamps
    end
  end
end
