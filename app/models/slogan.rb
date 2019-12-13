class Slogan < ApplicationRecord

    validates :firstName,:lastName,:proposal, presence: true
    validates :email, presence: true, uniqueness: true
    validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
    validates_length_of :proposal, maximum: 50
    
end
