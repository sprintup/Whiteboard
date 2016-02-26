var zombie = require('zombie');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
/*
	Domain World: For testing the core
*/

console.log('inside world.js');
function DomainWorld() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
  console.log('inside DomainWorld');
};

/*
	Web World: For testing web UI
*/

function buildChromeDriver () {
	var browser = new webdriver.Builder()	
			.usingServer()
			.withCapabilities({'browserName': 'chrome' })
			.build();
	return browser; 
}

function WebWorld() {
	this.browser = new zombie();

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
};

/*
	Export the world of your choice
	TODO: Set test depth by making the world function a switch
*/

var World = function World () {

  // this.World = WebWorld;			
  // return DomainWorld;
  console.log('inside world function');
	return WebWorld;  				//TODO: MAKE SWITCH TO CHANGE WORLD HERE
}

module.exports.World = World;