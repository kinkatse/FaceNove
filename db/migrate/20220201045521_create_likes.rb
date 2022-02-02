class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :liked, null: false
      t.integer :liker_id, null: false
      t.integer :post_id, null: false
    end
    add_index :likes, :liker_id
    add_index :likes, :post_id
  end
end
