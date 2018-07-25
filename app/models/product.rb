class Product < ActiveRecord::Base
  JSON_KEYS = %w{
  	id 
  	title 
  	description 
  	price 
  	image_url
  	brand
  	model
  	condition
  	year
  	finish
  	category
  	made_in
  }
  def as_json(opts = {})
    super.slice(*JSON_KEYS)
  end
end