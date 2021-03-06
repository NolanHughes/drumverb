class Product < ActiveRecord::Base
  validates :brand, presence: true
  validates :model, presence: true
  validates :condition, presence: true
  validates :title, presence: true
  validates :price, presence: true
  validates :shipping_price, presence: true
  validates :category, presence: true
  validates :description, presence: true
  validates :product_images, presence: true

  has_many :product_images, dependent: :destroy
  accepts_nested_attributes_for :product_images, allow_destroy: true
  
  def as_json(_opts = {})
    {
      id: id, 
      brand: brand,
      model: model,
      condition: condition,
      year: year,
      finish: finish,
      title: title,
      price: price,
      shipping_price: shipping_price,
      made_in: made_in,
      category: category,
      description: description,
      created_at: created_at,
      product_image_photos: product_images.map do |x|
        {
          url: x.photo.url,
          medium_url: x.photo.url(:medium),
          thumbnail_url: x.photo.url(:thumb),
          name: x.photo_file_name,
          id: x.id
        }
      end
    }
  end
end