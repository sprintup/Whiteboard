/*
	Considerations:
		-should any workouts currently in the cells be deleted?
		-should the workouts be deleted immediatly or as a batch?
*/

module.exports = function (argument) {
	this.Given(/^The browser opens to the calendar page$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^User adds workout with heartrate and duration$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^Inspects workout that was just added$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^the tTSS score should equal (\d+)$/, function (arg1, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});
}