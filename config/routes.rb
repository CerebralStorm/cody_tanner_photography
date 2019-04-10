Rails.application.routes.draw do
  resources :blogs
  resources :projects
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'static#index'
end
