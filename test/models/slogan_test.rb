require 'test_helper'

class SloganTest < ActiveSupport::TestCase
  test "slogan is saved all fields included" do
    slogan = Slogan.new
    assert_not slogan.save, "Saved slogan without fields"
  end
end
