class Product < ActiveRecord::Base
  JSON_KEYS = %w{id title description price image_url}
  def as_json(opts = {})
    super.slice(*JSON_KEYS)
  end
end