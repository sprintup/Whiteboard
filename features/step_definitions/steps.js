/*
Assertion docs: https://nodejs.org/api/assert.html
*/
var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function () {

	/*
	Enter variables in the spec/model.js file
	*/
	var myActions = browserActions.create(); 

  this.World = require('../support/world').World;

	this.Given(/^The browser opens to the login page$/, function (callback) {
    this.driver.get(myActions.url());
		this.driver.getCurrentUrl().then(function (browserUrl) {
			assert.equal(browserUrl,myActions.url(),'expected <'+browserUrl+'> was <'+myActions.url()+'>');
		});
	  /*
	  This code opens the page
  	browser.get('http://home.trainingpeaks.com/login');
	  */
	  callback().pending();
	});

	this.When(/^User enters username$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'Username'})
			.sendKeys(myActions.username());

		// Assertion
		this.driver.findElement({id:'Username'})
			.getAttribute("value")
			.then(function (element) {
				console.log('expected: '+myActions.username()+' actual: '+ element);
				assert.equal(element,myActions.username(),'actual <'+element+'> expected <'+myActions.username()+'>');
			  callback();
			});
	});

	this.When(/^User enters password$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'Password'})
		.sendKeys(myActions.password());
	  callback.pending();
	});

	this.When(/^User clicks login button$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions

	  callback.pending();
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