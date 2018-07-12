class ProductsController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Product.where(["title LIKE ? OR description LIKE ?", "%#{q}%", "%#{q}%"]).limit(100)#Maybe modify this
      )
    end
  end
end
