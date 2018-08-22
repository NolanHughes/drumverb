class AddLikesToProduct < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :likes, :integer, :default => 0
  end
end
