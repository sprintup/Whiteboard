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
Example try
*/
'use strict';

var World = function World(callback) {

  this.zombie = require('zombie');
  // this.webdriver = require('selenium-webdriver'),
  //   By = webdriver.By,
  //   until = webdriver.until;
  // this.browser = new webdriver.Builder() 
  //   .usingServer()
  //   .withCapabilities({'browserName': 'chrome' })
  //   .build();

  this.logIn = function(username, password) {
    console.log('in world/login with username: ' + username + ' and password: ' + password);  
  };

  // callback();

};

module.exports.World = World;