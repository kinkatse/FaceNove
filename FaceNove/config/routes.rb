Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  # This allows us to make the root of our app path display this view

  # namespace allows us to have a subset of controllers that live under
  # a specific url
  namespace :api do
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource :sessions, only: [:create, :destroy]
  end
end
