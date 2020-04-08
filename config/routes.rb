Rails.application.routes.draw do
  get '/about', to: 'home#index'
  get '/photo', to: 'home#index' 
  get '/location', to: 'home#index' 
  get '/contact', to: 'home#index'  

  get '/locations', to: 'location#index',  defaults: {format: 'json'}
  get '/photos', to: 'photos#index', defaults: {format: 'json'}
  get '/riders', to: 'riders#index',  defaults: {format: 'json'}
  post '/contest', to: 'contest#create',  defaults: {format: 'json'}
  #root 'event#show', defaults: {format: 'json'}

  root 'home#index'
end
