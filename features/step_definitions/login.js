/*
Assertion docs: https://nodejs.org/api/assert.html
*/
var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function () {

	/*
	Enter variables in the spec/model.js file
	*/
	var myActions = browserActions.CreateBrowserActions(); 

  this.World = require('../support/world').World;

	this.Given(/^The browser opens to the login page$/, function (callback) {
    this.driver.get(myActions.url_login());
		this.driver.getCurrentUrl().then(function (browserUrl) {
			assert.equal(browserUrl,myActions.url_login(),'expected <'+browserUrl+'> was <'+myActions.url_login()+'>');
		  callback();
		});
	});

	this.When(/^User enters username$/, function (callback) {
	  // Action
		this.driver.findElement({id:'Username'})
			.sendKeys(myActions.username());

		// Assertion
		this.driver.findElement({id:'Username'})
			.getAttribute("value")
			.then(function (element) {
				assert.equal(element,myActions.username(),'expected <'+myActions.username()+'> actual <'+element+'>');
			  callback();
			});
	});

	this.When(/^User enters password$/, function (callback) {
	  // Action
		this.driver.findElement({id:'Password'})
		.sendKeys(myActions.password());

		//Assertion
		this.driver.findElement({id:'Password'})
			.getAttribute("value")
			.then(function (element) {
				assert.equal(element,myActions.password(),'expected <'+myActions.password()+'> actual <'+element+'>' );
			  callback();
			});
	});

	this.When(/^User clicks login button$/, function (callback) {
	  // Action
	  this.driver.findElement({id:'btnSubmit'})
	  	.click()
	  	.then(function () {
			  callback();
	  	});
	});

	this.Then(/^Web app should load after a period of time$/, function (callback) {
	  // Action
	  this.driver.sleep(9000);
	  this.driver.getTitle().then(function (title) {
	  	assert.equal(title,myActions.pageTitle_calendar(),'expected page title: <'+myActions.pageTitle_calendar()+'> actual: <'+title+'>');
		  callback();
	  })
	});
};