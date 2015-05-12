class AddLinksAndSongsToExercises < ActiveRecord::Migration

  def change
    add_column :exercises, :links, :string
    add_column :exercises, :songs, :string
  end

end
