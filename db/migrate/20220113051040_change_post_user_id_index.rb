class ChangePostUserIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :user_id
    add_index :posts, :user_id
  end
end
