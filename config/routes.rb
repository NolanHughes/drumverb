Rails.application.routes.draw do
  scope '/api' do
    get :product, to: 'products#index'
  end
end