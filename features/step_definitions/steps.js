module.exports = function () {
	this.Given(/^The browser opens to the login page$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  browser.logIn();
	  callback.pending();
	});

	this.When(/^User enters username$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User enters password$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User clicks login button$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^Web app should load after a period of time$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});
};