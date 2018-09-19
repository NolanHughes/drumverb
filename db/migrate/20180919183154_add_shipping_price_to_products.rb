class AddShippingPriceToProducts < ActiveRecord::Migration[5.2]
  def change
  	add_column :products, :shipping_price, :integer
  end
end
