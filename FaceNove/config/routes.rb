Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  # This allows us to make the root (path of '/') of our app path
  # direct to the static_pages controller with action of root
  # which through rails, it knows to check the root.html.erb
  # in views/static_pages to render

  # namespace allows us to have a subset of controllers that live under
  # a specific url
  namespace :api do
    # We want a user to be able to be created, show all users, show a
    # specific user, update the user's information, and delete their account
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource :sessions, only: [:create, :destroy]
    # We want the sessions to be resource as opposed to resources because
    # resources is for when we have many (specifically many users which
    # can also be indicated by index), and would require a wild card (:id)
    # in order to specify one. With resource, we don't have to look up the
    # :id everytime so this is useful for something like sessions which
    # we only want to create or destroy
  end
  # Do rails routes and see that /api/users and /api/sessions is our path
end
