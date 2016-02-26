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
browser.findElement(webdriver.By.id('Username')).sendKeys('');
browser.findElement(webdriver.By.id('Password')).sendKeys('');
browser.findElement(webdriver.By.id('btnSubmit')).click();
browser.sleep(9000);

/*
	Logged in and loaded. Recording manual workout below.
*/

browser.executeScript('document.getElementsByClassName(\'addWorkout\')[70].click()');
browser.executeScript('document.getElementsByClassName(\'addWorkout Run future\')[0].click()');
browser.executeScript('document.getElementById(\'totalTimeCompletedField\').value=\'1:00:00\'');
browser.executeScript('document.getElementById(\'hrAvgField\').value=\'150\'');
browser.executeScript('document.getElementById(\'close\').click()');

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


/*
Inject this as javascript to open the day to edit: document.getElementsByClassName('addWorkout')[70].click()
*/

/*
Here is the xpath expression that works in chrome browser
$x("//div[@class='addWorkout']")[70].click()
*/

/*
This is today. It has 2 divs. The second is under class 'addWorkout wrapper'. In that div there is an add workout div to select.
var a = document.getElementsByClassName('dayWidth dayContainer day today');
*/

/*
This lists all of the add workout buttons in an array. Use .item to find index. The monday of the visible week is index 70. 
var b = document.getElementsByClassName('addWorkout')
*/
