var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var page = require('./loginDone.po');

chai.use(chaiAsPromised);
var expect = chai.expect;

var loginDone = function () {
	
       this.Given(/^I am on the landing page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.waitForAngular();
		expect(page.customer.isPresent()).to.eventually.equal(true);
         callback();
       });


       this.When(/^I click on Contact and Talkgroups icon$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.waitForAngular();
		 page.talkgroupsmanagement.click();
         callback();
       });

       this.Then(/^Title should display as Corporate Administration Tool$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.waitForAngular();
		 expect(browser.getTitle()).to.eventually.equal('Corporate Administration Tool');
         callback();
       });
};

module.exports = loginDone;