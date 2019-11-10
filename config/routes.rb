Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:index, :create, :show]
      resource :session, only: [:create, :destroy] 
      resources :days, only: [:index, :create, :show, :update, :destroy] do
        resources :photo_uploads,  only: [:index, :create]
      end
      resources :photo_uploads, only: [:show, :destroy]    

    end
end
