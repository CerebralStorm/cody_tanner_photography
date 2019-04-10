Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'static#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :blogs
      resources :projects
    end
  end
end
