class ProductsController < ApplicationController
  def index
    # render(
    #   status: 200,
    #   json: Product.all
    # )
    # Old way
    q = params[:q]

    render(
      status: 200,
      json: Product.all.where(["title LIKE ? OR description LIKE ?", "%#{q}%", "%#{q}%"]).limit(100)#Maybe modify this
    )

  end

  def create 
  	product = Product.create(product_params)

    render json: product
  end

  private

	  def product_params
	    params.require(:product).permit(:brand, :model, :condition, :year, :finish, :title, :price, :made_in, :category, :image, :description)
	  end

end
