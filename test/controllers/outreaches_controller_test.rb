require 'test_helper'

class OutreachesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @outreach = outreaches(:one)
  end

  test "should get index" do
    get outreaches_url
    assert_response :success
  end

  test "should get new" do
    get new_outreach_url
    assert_response :success
  end

  test "should create outreach" do
    assert_difference('Outreach.count') do
      post outreaches_url, params: { outreach: { message_id: @outreach.message_id, name: @outreach.name } }
    end

    assert_redirected_to outreach_url(Outreach.last)
  end

  test "should show outreach" do
    get outreach_url(@outreach)
    assert_response :success
  end

  test "should get edit" do
    get edit_outreach_url(@outreach)
    assert_response :success
  end

  test "should update outreach" do
    patch outreach_url(@outreach), params: { outreach: { message_id: @outreach.message_id, name: @outreach.name } }
    assert_redirected_to outreach_url(@outreach)
  end

  test "should destroy outreach" do
    assert_difference('Outreach.count', -1) do
      delete outreach_url(@outreach)
    end

    assert_redirected_to outreaches_url
  end
end
