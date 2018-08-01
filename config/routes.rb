Rails.application.routes.draw do
  scope '/api' do
  	scope '/products' do
      get '/' => 'products#index'
      post '/' => 'products#create'
    end
  end
end