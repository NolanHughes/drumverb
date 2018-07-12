class Product < ActiveRecord::Base
  JSON_KEYS = %w{title description price}
  def as_json(opts = {})
    super.slice(*JSON_KEYS)
  end
end