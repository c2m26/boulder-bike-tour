Rails.application.routes.draw do
  get '/riders', to: 'riders#index'
  get 'site/index'

  namespace :api do
    namespace :v1 do
      resources :slogans, only: [:new, :create]
    end
  end

  root 'site#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
