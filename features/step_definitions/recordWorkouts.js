/*
	These steps are for recording workouts with specific values. 

	Requirments:
	-plus button has been pressed with the modal list of all workouts showing
*/

var assert = require('assert');
var model = require(process.cwd() + '/spec/model');

module.exports = function (){
	var myActions = model.CreateBrowserActions(); 
	var workouts = model.CreateWorkouts();
	
	this.When(/^User adds RUN with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.run.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.run.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds BIKE with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Bike future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.bike.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.bike.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds SWIM with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Swim future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.swim.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.swim.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds CROSSTRAIN with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Crosstrain future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.crosstrain.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.crosstrain.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds MOUNTAINBIKE with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout MountainBike future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.mountainbike.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.mountainbike.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds STRENGTH with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.run.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.run.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds CUSTOM with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Strength future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.strength.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.strength.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds XC\-SKI with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout XC-Ski future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.xcski.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.xcski.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds ROWING with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Rowing future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.rowing.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.rowing.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds OTHER with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Other future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.other.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.other.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});

	this.When(/^User adds WALK with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  this.driver.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
		this.driver.executeScript('document.getElementsByClassName(\'addWorkout Walk future\')[0].click()'); //mod
		this.driver.findElement({id:'totalTimeCompletedField'}).sendKeys(workouts.walk.duration);	//mod
		this.driver.findElement({id:'hrAvgField'}).sendKeys(workouts.walk.heartRateThreshold); //mod
		this.driver.findElement({id:'close'}).click().then(function () {
		  callback();
		});
	});
};