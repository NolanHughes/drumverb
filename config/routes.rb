Rails.application.routes.draw do
  scope '/api' do
    get :products, to: 'products#index'
  end
end