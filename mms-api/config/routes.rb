Rails.application.routes.draw do
  
post '/estimates', to: 'estimates#create'

end
