class ChangePostsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :userId
    add_index :posts, :userId, unique: true
  end
end
