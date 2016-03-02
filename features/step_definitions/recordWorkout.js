/*
	These are shared steps for all workouts.
	
	Considerations:
		-should any workouts currently in the cells be deleted?
		-should the workouts be deleted immediatly or as a batch?
	Assumptions:
		-tests assume workout being tested is the most recent 
*/
var assert = require('assert');
var browserActions = require(process.cwd() + '/spec/model');

module.exports = function (argument) {
	var myActions = browserActions.CreateBrowserActions(); 

	this.Given(/^The browser is open to the calendar page$/, function (callback) {
	  this.driver.getTitle().then(function (title) {
	  	assert.equal(title,myActions.pageTitle_calendar,'expected page title: <'+myActions.pageTitle_calendar+'> actual: <'+title+'>');
		  callback();
	  });
	});

	/*
	Workouts are added individually in the recordWorkouts.js step definition file
	*/

	this.When(/^Inspects workout that was just added$/, function (callback) {
	  /*
			This step assumes workout being inspected is most recent workout
	  */ 
	  this.driver.sleep(1500); //this is needed for the element to be rendered
	  debugger;
	  this.driver.executeScript('document.getElementsByClassName(\'workoutDiv\')[document.getElementsByClassName(\'workoutDiv\').length-1].click()').
	  then(function () {
	  	callback();
	  });
	});

	this.Then(/^the tTSS score should equal (\d+)$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.findElement({id:'tssCompletedField'}).
	  	getAttribute('value').
	  	then(function (tTSS) {
	  		assert(tTSS,arg1,'expected tTSS: <'+arg1+'> actual <'+tTSS+'>');
			  callback();
  	});
	});

	this.Then(/^Delete workout$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  	this.driver.sleep(1000);
	  this.driver.findElement({id:'delete'}).click();
	  this.driver.findElement({id:'userConfirm'}).click().then(function () {
		  callback();
	  });
	});
};