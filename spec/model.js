/*
  Insert test data here once to be used throughout the steps
*/

'use strict';

var browserActions = {
  login: function(item) {
    //
  },
  url: function() {
  	return 'https://home.trainingpeaks.com/login';
  },
  username: function() {
  	return 'username';     //*** enter username here
  },
  password: function() {
  	return 'password';     //*** enter password here
  }
};

var thresholds = {
  runHeartRateThreshold: function () {
    return 150;    
  },
  bikeHeartRateThreshold: function () {
    return 150;    
  },
  swimHeartRateThreshold: function () {
    return 135;    
  },
  walkHeartRateThreshold: function () {
    return 125;    
  },
  defaultHeartRateThreshold: function () {
    return 145;    
  },
}

module.exports = {
  CreateBrowserActions: function() {
    return Object.create(browserActions);
  },

  CreateThresholds: function () {
    return Object.create(thresholds);
  }
};