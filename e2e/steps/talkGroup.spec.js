var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var page = require('./talkGroup.po');

chai.use(chaiAsPromised);
var expect = chai.expect;

var talkGroup = function () {

       this.Given(/^I am on the home page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });



       this.When(/^I click on Talkgroup menu$/, function (callback) {
		   browser.waitForAngular();
         page.talkGroupMenu.click();
         callback();
       });


       this.When(/^I click on Create Talkgroup menu$/, function (callback) {
		   browser.waitForAngular();
         page.createTalkGroup.click();
         callback();
       });


       this.When(/^I select Standard from the dropdown$/, function (callback){
		   browser.waitForAngular();
         page.standard.click();
         callback();
       });



       this.When(/^New Talkgroup page should open$/, function (callback) {
		   browser.waitForAngular();
		   expect(page.newTalkGroup.getText()).to.eventually.equal('New Talkgroup');
         callback();
       });
	   
	  
       this.Then(/^I clicked on Assign Members icon$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.waitForAngular();
		 page.assignMembers.click();
         callback();
       });

       
       this.When(/^I searched the "([^"]*)" to assign$/, function (arg1, callback) {
		   browser.waitForAngular();
		 //  page.assignSearchBox.click();
       page.assignSearchBox.sendKeys(arg1);
         callback();
       });


       this.Then(/^I checked the check box$/, function (callback) {
		browser.waitForAngular();
		page.assignMembersLabel.click();
        page.selectAllCheckBox.click();
		browser.waitForAngular();
		page.assignSearchBox.clear();
        callback();
       });

       this.When(/^I clicked on assign button$/, function (callback) {
		browser.waitForAngular();
        page.assignButton.click();
        callback();
       });

	    this.When(/^I entered the Group name$/, function (callback) {
		browser.waitForAngular();
        page.talkGroupName.sendKeys('navin standard');
        callback();
  });


  this.When(/^I clicked on Save button$/, function (callback) {
	  browser.waitForAngular();
    page.save.click();
    callback();
  });


  this.When(/^I cicked on Ok button$/, function (callback) {
	   browser.waitForAngular();
    page.talkGroupCreateConfirmOk.click();
    callback();
  });



  this.Then(/^I should see the success message$/, function (callback) {
	   browser.waitForAngular();
    page.talkGroupCreateSuccess.click();
    callback();
  });
	   
};

module.exports = talkGroup;