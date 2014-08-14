Musicapp::Application.routes.draw do

  root to: 'pages#index'

  get '/about', to: 'pages#about'
  get '/app', to: 'pages#app'

  get '/signup', to: 'users#new'
  get '/signin', to: 'sessions#new'
  get '/signout', to: 'sessions#destroy'

  get '/mia', to: 'mia#index'

  resources :users, only: [:new, :create, :update, :edit]

  resources :sessions, only: [:new, :create, :destroy]

  resources :tabs

  resources :schedules, only: [:index, :show, :update]

  resources :activities, only: :activity

end
