require "application_system_test_case"

class OutreachesTest < ApplicationSystemTestCase
  setup do
    @outreach = outreaches(:one)
  end

  test "visiting the index" do
    visit outreaches_url
    assert_selector "h1", text: "Outreaches"
  end

  test "creating a Outreach" do
    visit outreaches_url
    click_on "New Outreach"

    fill_in "Message", with: @outreach.message_id
    fill_in "Name", with: @outreach.name
    click_on "Create Outreach"

    assert_text "Outreach was successfully created"
    click_on "Back"
  end

  test "updating a Outreach" do
    visit outreaches_url
    click_on "Edit", match: :first

    fill_in "Message", with: @outreach.message_id
    fill_in "Name", with: @outreach.name
    click_on "Update Outreach"

    assert_text "Outreach was successfully updated"
    click_on "Back"
  end

  test "destroying a Outreach" do
    visit outreaches_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Outreach was successfully destroyed"
  end
end
