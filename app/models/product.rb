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
    super.slice(*JSON_KEYS)
  end

  mount_uploader :image, ImageUploader
end