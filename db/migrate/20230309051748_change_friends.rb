class ChangeFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :created_at, :datetime, null: false
  end
end
