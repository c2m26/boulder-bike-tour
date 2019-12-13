require 'rails_helper'

describe 'Post a slogan', :type => :request do
    
    context 'with complying form data' do
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email@mail.com', :proposal => 'test_proposal'} }
        end 

        it 'returns the first name' do
            expect(JSON.parse(response.body)['firstName']).to eq('test_firstName')
        end
        it 'returns the last name' do
            expect(JSON.parse(response.body)['lastName']).to eq('test_lastName')
        end
        it 'returns the email' do
            expect(JSON.parse(response.body)['email']).to eq('test_email@mail.com')
        end
        
        it 'returns the slogan proposal' do
            expect(JSON.parse(response.body)['proposal']).to eq('test_proposal')
        end
        
        it 'returns a created status' do
            expect(response).to have_http_status(:success) 
        end
    end

    context 'with empty form fields' do
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => '', :lastName => '', :email => '', :proposal => ''} }
        end 

        it "returns 'can't be blank'" do
            expect(JSON.parse(response.body)['firstName']).to eq(["can't be blank"])
        end
        it "returns 'can't be blank'" do
            expect(JSON.parse(response.body)['lastName']).to eq(["can't be blank"])
        end
        it "returns 'can't be blank'" do
            expect(JSON.parse(response.body)['email']).to eq(["can't be blank", "is invalid"])
        end
        
        it "returns 'can't be blank'" do
            expect(JSON.parse(response.body)['proposal']).to eq(["can't be blank"])
        end
        
        it 'returns a server error' do
            expect(response).to have_http_status(:server_error) 
        end
    end

    context 'with invalid email' do
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email.com', :proposal => 'test_proposal'} }
        end 

            it "returns 'is invalid'" do
                expect(JSON.parse(response.body)['email']).to eq(["is invalid"])
            end

            it 'returns a server error' do
                expect(response).to have_http_status(:server_error) 
            end
        
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email@com', :proposal => 'test_proposal'} }
        end 

            it "returns 'is invalid'" do
                expect(JSON.parse(response.body)['email']).to eq(["is invalid"])
            end

            it 'returns a server error' do
                expect(response).to have_http_status(:server_error) 
            end

        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => '@mail.com', :proposal => 'test_proposal'} }
        end 

            it "returns 'is invalid'" do
                expect(JSON.parse(response.body)['email']).to eq(["is invalid"])
            end

            it 'returns a server error' do
                expect(response).to have_http_status(:server_error) 
            end

        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email', :proposal => 'test_proposal'} }
        end 

            it "returns 'is invalid'" do
                expect(JSON.parse(response.body)['email']).to eq(["is invalid"])
            end

            it 'returns a server error' do
                expect(response).to have_http_status(:server_error) 
            end
    end

    context 'with duplicated email' do
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email@mail.com', :proposal => 'test_proposal'} }
        end 

        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email@mail.com', :proposal => 'test_proposal'} }
        end

        it "returns 'has already been taken'" do
            expect(JSON.parse(response.body)['email']).to eq(["has already been taken"])
        end

        it 'returns a server error' do
            expect(response).to have_http_status(:server_error) 
        end
    end

    context 'with slogan proposal longer than maximum char number accepted' do
        before do
            post '/api/v1/slogans', params: { slogan: {:firstName => 'test_firstName', :lastName => 'test_lastName', :email => 'test_email@mail.com', :proposal => '1234567890123456789012345678901234567890123456789011'} }
        end

        it "returns is invalid" do
            expect(JSON.parse(response.body)['proposal']).to eq(["is too long (maximum is 50 characters)"])
        end

        it 'returns a server error' do
            expect(response).to have_http_status(:server_error) 
        end

    end
end

