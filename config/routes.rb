Rails.application.routes.draw do
  
  resources :notes
  root :to => "home#index"

  namespace :api do
    namespace :v1 do
      resources :notes do
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
