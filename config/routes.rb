Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :notes do
      end
    end
  end
  get '/', to: 'home#index'
  get '/about', to: 'home#about'

  root :to => "home#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
