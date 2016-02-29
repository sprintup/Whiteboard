'use strict';

var browserActions = {
  login: function(item) {
    //
  },
  url: function(argument) {
	return 'http://home.trainingpeaks.com/login';
  },
  username: function(argument) {
	return 'EnterUsernameHere';
  },
  password: function(argument) {
	return 'EnterPasswordHere';
  }
};

module.exports = {
  create: function() {
    return Object.create(browserActions);
  }
};