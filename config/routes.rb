Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :slogans, only: [:create]
    end
  end

  root 'site#index'

  match '*path', to: 'site#index', via: :all 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
