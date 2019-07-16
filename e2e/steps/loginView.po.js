'use strict';

var LoginView  =  function() {
	
	
	this.username = element(by.css('#username'));
	this.pwd = element(by.css('#password'));
	this.signIn = element(by.css('.btn-submit'));
	this.homePage = element(by.css('.panel-heading.text-center.content-panel-heading.ng-binding'));
	this.corpManagement = element(by.xpath('//*[@id="headingTwo"]/h3/a'));
	this.corpAdminTool =  element(by.xpath('//*[@id="linkCorpAdminTool"]'));
	this.textEnter =  element(by.xpath('//*[@id="corpid"]'));
	this.go = element(by.xpath('//*[@id="corpMainDiv"]/div/div[2]/button'));
	this.customer = element(by.xpath('//*[@id="ng-app"]/body/div[3]/div/div[2]/div/div[1]/div[1]/strong'));
	this.closeCookies = element(by.css('.close-tour-cookie-img'));
	this.closeTakeATour = element(by.css('.close-tour-img'));
};

module.exports = new LoginView();

