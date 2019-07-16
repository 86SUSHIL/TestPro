'use strict';

var talkGroup  =  function() {
	
	this.talkGroupMenu = element(by.xpath('//button[@title="Talkgroups"]'));
	this.createTalkGroup = element(by.xpath('//button[@ng-click="createTG()"]'));
	this.standard = element(by.xpath('//a[@href="#/cat/talkgroups/edit/1/"]'));
	this.newTalkGroup = element(by.xpath('//h3[@ng-show="newUser"]')); 
	this.assignMembers = element(by.xpath('//button[@title="Assign Members"]'));
	this.assignSearchBox = element(by.xpath('//*[@id="tgAssignMem"]/div/input'));
	this.assignMembersLabel = element(by.xpath('//*[@id="assignTGmemberDialog"]/h3'));
	this.selectAllCheckBox = element(by.xpath('//div[@checkboxes="memberShowData"]'));
	this.assignButton = element(by.xpath('//button[@ng-click="assignContactsAsMembers()"]'));
	this.talkGroupName = element(by.xpath('//input[@id="groupName"]'));
	this.save = element(by.xpath('//*[@id="ng-app"]/body/div[3]/div/div[2]/ui-view/ui-view/div[1]/ul[2]/li[4]/button[1]'));
	this.talkGroupCreateConfirmOk = element(by.xpath('//*[@id="ng-app"]/body/div[4]/div/div[1]/div[1]/div[5]/button[1]')); 
	this.talkGroupCreateSuccess = element(by.css('.pull-right.flip.cur-ptr.nobutton.img-icon.close-img')); 
};

module.exports = new talkGroup();