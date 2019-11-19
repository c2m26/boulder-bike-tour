class SlogansController < ApplicationController

    def new
        @slogan = Slogan.new
    end

    def create
        @slogan = Slogan.new(slogan_params)
    end

    private

    def slogan_params
            params.require(:slogan).permit(:firstName, :lastName, :email, :slogan)
    end
end
