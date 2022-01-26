class FixPostColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :post, :body
  end
end
