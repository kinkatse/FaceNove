class CreateLikesAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.string :likeable_type
      t.bigint :likeable_id

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :likes, :likeable_type
    add_index :likes, :likeable_id
  end
end