class AddNotesToExercises < ActiveRecord::Migration

  def change
    add_column :exercises, :notes, :string, default: ''
  end

end
