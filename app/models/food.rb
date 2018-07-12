class Food < ActiveRecord::Base
  JSON_KEYS = %w{description kcal}
  def as_json(opts = {})
    super.slice(*JSON_KEYS)
  end
end