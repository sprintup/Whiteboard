/*
Enter variables in the spec/model.js file
*/

var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function () {

	var myActions = browserActions.create();; 

  this.World = require('../support/world').World;

	this.Given(/^The browser opens to the login page$/, function (callback) {
    this.driver.get(myActions.url());
	  /*
	  This code opens the page
  	browser.get('http://home.trainingpeaks.com/login');
	  */
	  callback().pending();
	});

	this.When(/^User enters username and password$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'Username'})
			.sendKeys(myActions.username());
		this.driver.findElement({id:'Password'})
			.sendKeys(myActions.password());
	  callback();
	});

	this.When(/^User clicks login button$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'btnSubmit'}).click();	
	  /*
	  This code clicks button
		browser.findElement(webdriver.By.id('btnSubmit')).click();
	  */
	  callback();
	});

	this.Then(/^Web app should load after a period of time$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.sleep(9000);
	  this.driver.executeScript('document.readyState === "complete"').then(function(){console.log('readyState: ')});

	  /*
	  This code lets log in occur
		browser.sleep(9000);
	  */
	  callback.pending();
	});
};