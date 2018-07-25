Rails.application.routes.draw do
	resources :outreaches do
	  resources :messages do
		  resources :templates
	  end
	end
	
	#naked routes 
	resources :messages
	resources :templates

	# API

	namespace :api do
		resources :outreaches do
			resources :messages do
				resources :templates
			end
		end
		resources :messages
		resources :templates

	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
