Rails.application.routes.draw do
  scope '/api' do
    get :products, to: 'products#index'
    post :products, to: 'products#create'
  end
end