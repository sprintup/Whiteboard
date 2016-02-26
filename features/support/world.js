var zombie = require('zombie');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
/*
	Domain World: For testing the core
*/

function DomainWorld() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };

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
	this.browser.chromeDriver = buildChromeDriver;   
};

/*
	Export the world of your choice
	TODO: Set test depth
*/

var World = function World () {
  this.World = WebWorld;			//TODO: MAKE SWITCH TO CHANGE WORLD HERE
  return DomainWorld;
}

module.exports.World = World;