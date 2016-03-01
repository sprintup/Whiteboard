/*
	Considerations:
		-should any workouts currently in the cells be deleted?
		-should the workouts be deleted immediatly or as a batch?
*/
var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function (argument) {
	var myActions = browserActions.CreateBrowserActions(); 

	this.Given(/^The browser is open to the calendar page$/, function (callback) {
	  this.driver.getTitle().then(function (title) {
	  	assert.equal(title,myActions.pageTitle_calendar(),'expected page title: <'+myActions.pageTitle_calendar()+'> actual: <'+title+'>');
		  callback();
	  });
	});

	this.When(/^User adds workout with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()');
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys('1:00:00');
		this.driver.findElement({id:'hrAvgField'}).sendKeys('150');
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});

	});

	this.When(/^Inspects workout that was just added$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.wait(30000);
	  callback.pending();
	});

	this.Then(/^the tTSS score should equal (\d+)$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});
}