Rails.application.routes.draw do
  scope '/api' do
    get :products, to: 'products#index'
    post :produts, to: 'products#create'
  end
end