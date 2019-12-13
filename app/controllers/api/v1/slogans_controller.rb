class Api::V1::SlogansController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        slogan = Slogan.new(slogan_params)
        if slogan.save
            render json: slogan, status: :ok
        else
            render json: slogan.errors, status: :unprocessably_entity
            
        end
    end

    private

    def slogan_params
            params.require(:slogan).permit(:firstName, :lastName, :email, :proposal)
    end
end
