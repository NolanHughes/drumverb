Rails.application.routes.draw do
  scope '/api' do
  	scope '/products' do
      get '/' => 'products#index'
      post '/' => 'products#create'
      scope '/upload' do
      	get '/' => 'products#upload'
      	post '/' => 'products#upload'
      end
    end
  end
end