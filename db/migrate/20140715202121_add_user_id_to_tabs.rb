class AddUserIdToTabs < ActiveRecord::Migration
  def change
    add_column :tabs, :user_id, :integer
    add_index :tabs, :user_id
  end
end
