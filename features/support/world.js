var zombie = require('zombie');

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
	var webdriver = require('selenium-webdriver'),
	    By = webdriver.By,
	    until = webdriver.until;
	var browser = new webdriver.Builder()	
			.usingServer()
			.withCapabilities({'browserName': 'chrome' })
			.build();
	return browser; 
}

function WebWorld() {
	this.browser = new zombie();

	browser.get('http://home.trainingpeaks.com/login');
	browser.findElement(webdriver.By.id('Username')).sendKeys(username);
	browser.findElement(webdriver.By.id('Password')).sendKeys(password);
	browser.findElement(webdriver.By.id('btnSubmit')).click();
	browser.sleep(9000);
};

/*
	Export the world of your choice
*/

var World = function World () {
  this.World = DomainWorld;
  return DomainWorld;
}

module.exports.World = World;