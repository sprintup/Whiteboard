// var Person = require('../../lib/shouty.js');

//person constructor
var Person = function () {
	this.position = 0;
};
Person.prototype.move_to = function(location){
	this.position = location;
};
Person.prototype.shout = function(message){};

var lucy = new Person;
var sean = new Person;

module.exports = function () {
	this.Given(/^Lucy is (\d+)m from Sean$/, function (distance, callback) {
	  // Write code here that turns the phrase above into concrete actions

	  // lucy = new Person;
	  // sean = new Person;

	  console.log('sean\'s location is ' + sean.position);
	  console.log('lucy\'s location before is ' + lucy.position);

	  lucy.move_to(distance);

	  console.log('lucy\'s location after is ' + lucy.position);

	  if (lucy.position < (lucy.position + sean.position)) {	
		  callback();
	  } else
	  {
	  	callback('lucy is too far away');
	  }
	});

	this.When(/^Sean shouts "([^"]*)"$/, function (message, callback) {
	  // Write code here that turns the phrase above into concrete actions
	  sean.shout(message);
	  callback('failed');
	});

	this.Then(/^Lucy hears Sean's message$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback();
	});

};