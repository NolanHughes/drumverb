class ProductImage < ApplicationRecord
	belongs_to :product, inverse_of: :product_images
  has_attached_file \
    :photo,

    styles: { original: "", medium: '265x265#', thumb: ['112x112#', 'jpg'] },
    # convert_options: {
    #   all: '-interlace Plane'
    # },
    source_file_options: { all: '-auto-orient' },
    default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :photo
  validates_attachment_file_name :photo, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/, /JPE?G\Z/]
end
