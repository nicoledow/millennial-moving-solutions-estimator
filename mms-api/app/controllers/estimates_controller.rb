require 'rest-client'

class EstimatesController < ApplicationController

    def create
        #binding.pry
        new_estimate = Estimate.new(
            starting_city: estimate_params[:startingCity],
            starting_state: estimate_params[:startingState],
            destination_city: estimate_params[:destination_city],
            destination_state: estimate_params[:destinationState],
            num_of_bedrooms: estimate_params[:numOfBedrooms],
            num_of_floors: estimate_params[:num_of_floors],
            parking_type: estimate_params[:parkingDistance],
            customer_name: estimate_params[:customerName],
            customer_email: estimate_params[:customerEmail],
            customer_phone: estimate_params[:customerPhone]
        )

        #if the new estimate passes all validations, calculate and set the estimated price
            #add estimated price to the estimate's attrs
            #save the estimate and render its json
       
            new_estimate.distance = RestClient.get(
                "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{new_estimate.starting_city},#{new_estimate.starting_state}&destinations=#{new_estimate.destination_city},#{new_estimate.destination_state}&key=#{ENV['GOOGLE_MAPS_API_KEY']}"
            )
            binding.pry 
        
    end

    private
    def estimate_params
        params.permit(:startingCity, :destinationCity, :startingState, :destinationState, :numOfBedrooms, :numOfFloors, :parkingDistance, :customerName, :customerEmail, :customerPhone)
    end
end