class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :post, null: false
      t.integer :userId, null: false
    end
  end
end
