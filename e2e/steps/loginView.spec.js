var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var page = require('./loginView.po');

chai.use(chaiAsPromised);
var expect = chai.expect;

var loginView = function () {

this.Given(/^I am on the login page$/, function (callback) {

  // Write code here that turns the phrase above into concrete actions

//browser.ignoreSynchronization=true; // To be added if the application is non-angular
 // To maximize the window
 browser.ignoreSynchronization = true;
browser.get("https://103.249.46.220/csrkodiak/#/login").then(function(){
	browser.sleep(10000);
	 browser.driver.manage().window().maximize();
   //browser.waitForAngular();
    callback(); // To tell the cucumber that we are done with this step
   });
  
	
});

this.When(/^I enter username$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  	page.username.sendKeys("kodiak").then(function(){
  callback();
 });
 //browser.sleep(20000);
 browser.waitForAngular();
});

this.When(/^I enter password$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  	page.pwd.sendKeys("kodiak!").then(function(){
  callback();
 });
 browser.waitForAngular();
});

this.When(/^I click on login button$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions 
  	page.signIn.click().then(function(){
  callback();
 });
 browser.waitForAngular();
});
	   
	 this.Then(/^I should see Homepage$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions 
	  browser.waitForAngular();
	  expect(page.homePage.getText()).to.eventually.equal('CSR Tool');
	  callback();
	}); 

	this.Given(/^I am on the Homepage$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  expect(page.homePage.isPresent()).to.eventually.equal(true);
  callback();
});

this.When(/^I clicked on Corporate Management label$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
		 browser.waitForAngular();
		  page.corpManagement.click().then(function(){
	 callback();
       });
       });
	   
this.When(/^I clicked on Corp Admin Tool label$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  browser.waitForAngular();
    page.corpAdminTool.click().then(function(){
	 callback(); 
 });
});	   

 this.When(/^I sent corp Id to the text field$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  page.textEnter.sendKeys('1234').then(function(){
  callback();
  });
});

 this.When(/^I clicked on Go button$/, function (callback) {
   // Write code here that turns the phrase above into concrete actions
   
    page.go.click().then(function(){
	 callback(); 
	 });
 });

 
 this.When(/^I clicked on Cookies cross icon$/, function (callback) {
   // Write code here that turns the phrase above into concrete actions
   var handlePromise = browser.driver.getAllWindowHandles();

        handlePromise.then(function(handles) {
            var popUpHandle = handles[1]; // Change to new handle        
            browser.driver.switchTo().window(popUpHandle);
			browser.waitForAngular();
            var popUpHandleFinal = browser.driver.getWindowHandle();
            browser.ignoreSynchronization = false;
			browser.waitForAngular();
            page.closeCookies.isPresent().then(function(data){
			if(data){
					browser.waitForAngular();
			page.closeCookies.click();
			browser.waitForAngular();
				}
				
			});
            callback(); 
			});
	 
 });
            
this.When(/^I clicked on Take a Tour close icon$/, function (callback) {
	        browser.waitForAngular();
            page.closeTakeATour.isPresent().then(function(data){
				if(data){
					browser.waitForAngular();
			page.closeTakeATour.click();
	browser.waitForAngular();
				}
			
});   
callback();         
});	   
 this.Then(/^I should see landing page$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  browser.waitForAngular();
  expect(page.customer.getText()).to.eventually.equal('Customer');
  callback();
  //driver.close();
});

};
module.exports = loginView;

