Rails.application.routes.draw do
  root 'home#index'
  get '/components/about'
end
