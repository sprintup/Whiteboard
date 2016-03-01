/*
	These steps are for recording workouts with specific values. 

	Requirments:
	-plus button has been pressed with the modal list of all workouts showing
*/

var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function (){
	var myActions = browserActions.CreateBrowserActions(); 
	
	this.When(/^User adds RUN with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()');
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys('1:00:00');
		this.driver.findElement({id:'hrAvgField'}).sendKeys('150');
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds BIKE with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds SWIM with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds CROSSTRAIN with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds MOUNTAINBIKE with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds STRENGTH with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds CUSTOM with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds XC\-SKI with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds ROWING with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds OTHER with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds WALK with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});
};