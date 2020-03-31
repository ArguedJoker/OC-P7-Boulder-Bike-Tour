Rails.application.routes.draw do
  root 'home#index'
  get '/pages/about', to: 'pages#about', as: 'about'
  get '/riders/riders', to: 'riders#riders', as: 'Competitor_info'
  get '/pages/photo', to: 'pages#photo', as: 'Gallery'
  get '/location/location', to: 'location#location', as: 'Map'
  get '/pages/contact', to: 'pages#contact', as: 'Contact_us'
end
