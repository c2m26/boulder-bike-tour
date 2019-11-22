class Slogan < ApplicationRecord

    validates :firstName,  :lastName, :email, :proposal, presence: true
    
end
