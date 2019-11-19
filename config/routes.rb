Rails.application.routes.draw do
  get '/riders', to: 'riders#index'
  get 'site/index'

  get '/slogans/new',to: 'slogans#new'
  post '/slogans', to: 'slogans#create'

  root 'site#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
