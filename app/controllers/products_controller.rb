class ProductsController < ApplicationController
  # before_action :set_product, only: [:show, :update, :destroy]

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

  def show
    render json: @product
  end

  def create 
    #Maybe add in if/else statement and new/save to handle errors
  	product = Product.create(product_params)

    render json: product
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end

  private

    def set_product
      @product = Product.find(params[:id])
    end

	  def product_params
	    params.require(:product).permit(
       [ :brand, 
         :model, 
         :condition, 
         :year, 
         :finish, 
         :title, 
         :price, 
         :made_in, 
         :category, 
         :description,
         product_images_attributes: %I[ id photo _destroy ]
       ]
      )
	  end

end
