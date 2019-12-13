FactoryBot.define do
  factory :random_slogan, class: 'Slogan' do
    firstName { Faker::Name.first_name }
    lastName  { Faker::Name.last_name }
    email     { Faker::Internet.email }
    proposal  { Faker::Quote.robin }
  end

end