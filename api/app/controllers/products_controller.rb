class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    q = params[:q]

    render(
      status: 200,
      json: Product.all.where(["title LIKE ? OR description LIKE ?", "%#{q}%", "%#{q}%"]).limit(100)
    )
  end

  def show
    render json: @product
  end

  def create 
    product = Product.new(product_params)

    if product.save
      render json: product, status: :created, location: product
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # def destroy
  #   @product.destroy
  # end

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
         :likes,
         product_images_attributes: %I[ id photo _destroy ]
       ]
      )
	  end

end
