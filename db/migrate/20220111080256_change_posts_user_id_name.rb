class ChangePostsUserIdName < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :userId
    remove_column :posts, :userId
    add_column :posts, :user_id, :integer, null: false
    add_index :posts, :user_id, unique: true
  end
end
