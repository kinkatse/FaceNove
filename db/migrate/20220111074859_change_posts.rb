class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :userId
    add_column :posts, :created_at, :datetime, null: false
    add_column :posts, :updated_at, :datetime, null: false
  end
end
