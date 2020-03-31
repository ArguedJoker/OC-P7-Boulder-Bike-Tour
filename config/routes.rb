Rails.application.routes.draw do
  
  get 'pages/slogan', to: 'pages#slogan', as: 'slogan'
  get '/about', to: 'home#index'
  get '/photo', to: 'home#index' 
  get '/location', to: 'home#index' 
  get '/contact', to: 'home#index'  
  root 'home#index'
end
