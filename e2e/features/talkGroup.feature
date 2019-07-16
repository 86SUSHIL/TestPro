Feature: Create Group
 
 Scenario: Creating a Standard Group
   Given I am on the home page
   When I click on Talkgroup menu
   When I click on Create Talkgroup menu
   When I select Standard from the dropdown
   When New Talkgroup page should open
   Then I clicked on Assign Members icon
	 
 Scenario Outline: Assigning contacts to a Standard Group
	 When I searched the "<mdn>" to assign
	 Then I checked the check box
	 Examples:
		 |mdn|
		 |+91-984-567-0002|
		 |+91-984-567-0004|
		 |+91-984-567-0005|
		 
 Scenario: Standard Group Created	 
	 When I clicked on assign button
	 When I entered the Group name
	 And I clicked on Save button
	 And I cicked on Ok button
	 Then I should see the success message 
	 