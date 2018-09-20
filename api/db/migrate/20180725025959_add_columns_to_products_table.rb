class AddColumnsToProductsTable < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :brand, :string
  	add_column :products, :model, :string
  	add_column :products, :condition, :string
  	add_column :products, :year, :integer
  	add_column :products, :finish, :string
  	add_column :products, :category, :string
  	add_column :products, :made_in, :string
  end
end
