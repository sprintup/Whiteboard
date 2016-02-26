"use strict";
/*
	Log users into training peaks. 
*/

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var browser = new webdriver.Builder()	
		.usingServer()
		.withCapabilities({'browserName': 'chrome' })
		.build();

browser.get('http://home.trainingpeaks.com/login');
browser.findElement(webdriver.By.id('Username')).sendKeys(username);
browser.findElement(webdriver.By.id('Password')).sendKeys(password);
browser.findElement(webdriver.By.id('btnSubmit')).click();
browser.sleep(9000);

/*
	Logged in and loaded. Recording manual.
*/

browser.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
browser.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()');
browser.findElement(webdriver.By.id('totalTimeCompletedField')).sendKeys('1:00:00');
browser.findElement(webdriver.By.id('hrAvgField')).sendKeys('150');
browser.findElement(webdriver.By.id('close')).click();

/*
	Workout recorded. Open and test if tTSS was recorded properly
*/

browser.sleep(2000);
browser.executeScript('document.getElementsByClassName(\'workoutSelected\')[0].click()');

module.exports = browser; 

/*
Class names:
addWorkout Run future
addWorkout Bike future
addWorkout Swim future
addWorkout Swim future
addWorkout Crosstrain future
addWorkout DayOff future
addWorkout MountainBike future
addWorkout Strength future
addWorkout Custom future
addWorkout XC-Ski future
addWorkout Rowing future
addWorkout Other future
addWorkout Walk future

ID of Inputs:
totalTimeCompletedField	
hrAvgField
close
*/
