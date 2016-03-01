/*
  Insert test data here once to be used throughout the steps
*/

'use strict';

var browserActions = {
  username: function() {
  	return 'username';     //*** for example, enter username here
  },
  password: function() {
  	return 'password';     //*** and enter password here, etc.
  },
  url_login: function() {
    return 'https://home.trainingpeaks.com/login';
  },
  pageTitle_calendar: function() {
    return 'TrainingPeaks - Plan your training, track your workouts and measure your progress';
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