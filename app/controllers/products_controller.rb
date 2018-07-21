class ProductsController < ApplicationController
  def index
    q = params[:q]

    render(
      status: 200,
      json: Product.where(["title LIKE ? OR description LIKE ?", "%#{q}%", "%#{q}%"]).limit(100)#Maybe modify this
    )
  end

  def new

  end

  def create
  	
  end

end
