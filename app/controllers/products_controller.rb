class ProductsController < ApplicationController
  def index
    render(
      status: 200,
      json: Product.all
    )
    #Old way
    # q = params[:q]

    # render(
    #   status: 200,
    #   json: Product.all(["title LIKE ? OR description LIKE ?", "%#{q}%", "%#{q}%"]).limit(100)#Maybe modify this
    # )

  end

  # def create
  # 	Product.create(product_params)
  # end

  # private

	 #  def product_params
	 #    params.require(:item).permit(:title, :description, :price, :image_url)
	 #  end

end
