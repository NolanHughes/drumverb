class RenameFoodTableToProductTable < ActiveRecord::Migration[5.2]
  def change
  	rename_table :foods, :products
  end
end
