class Product < ActiveRecord::Base
  JSON_KEYS = %w{
  	id 
  	title 
  	description 
  	price 
  	image
  	brand
  	model
  	condition
  	year
  	finish
  	category
  	made_in
    created_at
  }
  
  def as_json(opts = {})
    # binding.pry
    super.slice(*JSON_KEYS)
  end
end