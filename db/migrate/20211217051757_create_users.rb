class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :firstName, null: false
      t.string :lastName, null: false
      t.text :bio
      t.date :birthdate, null: false
      t.string :gender
      t.string :education
      t.string :hometown
      t.string :work
      t.string :relationship
      t.string :website
      t.string :profilePicUrl
      t.string :coverPicUrl

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
