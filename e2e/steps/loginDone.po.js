'use strict';

var loginDone  =  function() {
	
	this.customer = element(by.xpath('//*[@id="ng-app"]/body/div[3]/div/div[2]/div/div[1]/div[1]/strong'));
	this.talkgroupsmanagement = element(by.css('.talkgroupsmanagement-img'));
	
};

module.exports = new loginDone();

