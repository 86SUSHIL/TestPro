Feature: Testing Application

	Scenario: Testing Login
		Given I am on the login page
		When I enter username
		And I enter password
		And I click on login button
		Then I should see Homepage
		
	Scenario: Testing Landing to Home Page
		Given I am on the Homepage
		When I clicked on Corporate Management label
		And I clicked on Corp Admin Tool label
		And I sent corp Id to the text field
		And I clicked on Go button
		And I clicked on Cookies cross icon
		And I clicked on Take a Tour close icon
		Then I should see landing page