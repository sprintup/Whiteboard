module.exports = function () {

  this.World = require('../support/world').World;

	this.Given(/^The browser opens to the login page$/, function (callback) {
    this.driver.get('http://home.trainingpeaks.com/login');

	  /*
	  This code opens the page
  	browser.get('http://home.trainingpeaks.com/login');
	  */
	  callback().pending();
	});

	this.When(/^User enters username and password$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'Username'})
			.sendKeys('username');
		this.driver.findElement({id:'Password'})
			.sendKeys('password');

	  callback.pending();
	});

	this.When(/^User clicks login button$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
		this.driver.findElement({id:'btnSubmit'}).click();	
	  /*
	  This code clicks button
		browser.findElement(webdriver.By.id('btnSubmit')).click();
	  */
	  callback.pending();
	});

	this.Then(/^Web app should load after a period of time$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions

	  /*
	  This code lets log in occur
		browser.sleep(9000);
	  */
	  callback.pending();
	});
};