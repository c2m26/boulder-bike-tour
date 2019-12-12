class Api::V1::SlogansController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    
    def create
        slogan = Slogan.new(slogan_params)
        if slogan.save
            render json: {status: 'SUCCESS', message: 'Saved Slogan', data:slogan}, status: :ok
        else
            render json: {status: 'ERROR', message: 'Slogan not saved', data:slogan.erros}, status: :unprocessably_entity
            
        end
    end

    private

    def slogan_params
            params.require(:slogan).permit(:firstName, :lastName, :email, :proposal)
    end
end
