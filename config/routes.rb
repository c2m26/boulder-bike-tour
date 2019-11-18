Rails.application.routes.draw do
  get '/riders', to: 'riders#index'
  get 'site/index'

  root 'site#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
