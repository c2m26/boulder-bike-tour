class Slogan < ApplicationRecord

    validates :firstName,  :lastName, :email, :slogan, presence: true
    
end
