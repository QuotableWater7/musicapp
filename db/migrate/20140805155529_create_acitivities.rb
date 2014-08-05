class CreateAcitivities < ActiveRecord::Migration
  def change
    create_table :acitivities do |t|
      t.string :name
      t.integer :importance
      t.belongs_to :schedule

      t.timestamps
    end
  end
end
