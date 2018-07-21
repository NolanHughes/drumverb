class Api::V1::ProdcutsController < Api::V1::BaseController
  def index
    respond_with Product.all
  end

  def create
    respond_with :api, :v1, Product.create(product_params)
  end

  # def destroy
  #   respond_with Item.destroy(params[:id])
  # end

  # def update
  #   item = Item.find(params["id"])
  #   item.update_attributes(item_params)
  #   respond_with item, json: item
  # end

  private

    def product_params
      params.require(:item).permit(:title, :description, :price, :image_url)
    end
end