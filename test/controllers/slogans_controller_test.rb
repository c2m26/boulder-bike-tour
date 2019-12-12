require 'test_helper'

class SlogansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @slogan = slogans(:one)
  end

  #test "should get index" do
  #  get slogans_url
  #  assert_response :success
  #end

  test "should get new" do
    get new_api_v1_slogan_url
    assert_response :success
  end

  test "should create slogan" do
    assert_difference('Slogan.count') do
      post api_v1_slogans_path, params: {slogan: {firstName: @slogan.firstName ,lastName: @slogan.lastName ,email: @slogan.email ,proposal: @slogan.proposal}}
    end

  #  assert_redirected_to api_v1_slogans_path(Slogan.last)
  end

  #test "should show slogan" do
  #  get slogan_url(@slogan)
  #  assert_response :success
  #end

  #test "should get edit" do
  #  get edit_slogan_url(@slogan)
  #  assert_response :success
  #end

  #test "should update slogan" do
  #  patch slogan_url(@slogan), params: { slogan: {  } }
  #  assert_redirected_to slogan_url(@slogan)
  #end

  #test "should destroy slogan" do
  #  assert_difference('Slogan.count', -1) do
  #    delete slogan_url(@slogan)
  #  end

  #  assert_redirected_to slogans_url
  #end
end
