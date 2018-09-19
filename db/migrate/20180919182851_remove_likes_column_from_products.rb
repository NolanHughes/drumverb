class RemoveLikesColumnFromProducts < ActiveRecord::Migration[5.2]
  def change
  	remove_column :products, :likes
  end
end
