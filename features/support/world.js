// var zombie = require('zombie');
// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// console.log('inside world.js');

// /*
//   Domain World: For testing the core
// */

// function DomainWorld() {
//   console.log('inside DomainWorld');
//   this.browser = new zombie(); // this.browser will be available in step definitions
//   this.visit = function (url, callback) {
//     this.browser.visit(url, callback);
//   };
// };

// /*
// 	Web World: For testing web UI
// */

// function buildChromeDriver () {
// 	var browser = new webdriver.Builder()	
// 			.usingServer()
// 			.withCapabilities({'browserName': 'chrome' })
// 			.build();
// 	return browser; 
// }

// function WebWorld() {
//   console.log('inside WebWorld function');
// 	this.browser = new zombie();

//   this.visit = function (url, callback) {
//     this.browser.visit(url, callback);
//   };
// };

// /*
// 	Export the world of your choice
// 	TODO: Set test depth by making the world function a switch
// */

// var World1 = function World2 () {

//   this.clickAddGroceryListItem = function() {
//     console.log('clickAddGroceryListItem');
//   };

//   // this.World = WebWorld;			
//   // return DomainWorld;
//   console.log('inside world function');
// 	return WebWorld;  				//TODO: MAKE SWITCH TO CHANGE WORLD HERE
// }

// // module.exports.World = World1;


/*
Example try #1: it carries world to steps
*/
// 'use strict';

// var WebWorld = function World(callback) {

//   this.zombie = require('zombie');
//   this.webdriver = require('selenium-webdriver');
//       By = this.webdriver.By;
//       until = this.webdriver.until;

//   this.logIn = function(username, password) {
//     var browser = new this.webdriver.Builder() 
//     .usingServer()
//     .withCapabilities({'browserName': 'chrome' })
//     .build();
//     // console.log('in world/login with username: ' + username + ' and password: ' + password); 
//     // console.log('this.browser.get' + this.browser.get); 
//     // console.log('this.browser: ' + this.browser);
//     // console.log('this: ' + this);
//     // console.log('this.webdriver' + this.webdriver);
//     // console.log('this.webdriver.Builder(): ' + this.webdriver.Builder());
//     browser.get('http://home.trainingpeaks.com/login');
//     browser.findElement(this.webdriver.By.id('Username')).sendKeys(username);
//     browser.findElement(this.webdriver.By.id('Password')).sendKeys(password);
//     browser.findElement(this.webdriver.By.id('btnSubmit')).click();
//     browser.sleep(15000);
//   };

//   // callback();
// };

// module.exports.World = WebWorld;

/*
Example try #2
*/
'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      platformVersion: '4.4',
      deviceName: 'Android Emulator',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
  default:
    var driver = buildChromeDriver();
}

var getDriver = function() {
  console.log('inside getDriver');        //TODO: MAKE THIS RETURN THE CHROME DRIVER
  return driver;
};

var World = function World(callback) {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };

  // callback();
};

module.exports.World = World;
module.exports.getDriver = getDriver;
