class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :post_id, null: false

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :comments, :user_id
    add_index :comments, :post_id
  end
end