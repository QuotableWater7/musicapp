Musicapp::Application.routes.draw do
  root to: 'pages#index'

  get '/about', to: 'pages#about'
  get '/app', to: 'pages#app'
end
