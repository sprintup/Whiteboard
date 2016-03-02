/*
  TODO: Refactor this and steps so their properties instead of functions

  Note: Insert test data here once to be used throughout the steps...
*/

'use strict';
var workouts = require('./mock/workouts.js');

var browserActions = {
  username  : 'username', //*** ...for example, enter username here...
  password  : 'password', //*** ...and enter password here, etc.
  url_login : 'https://home.trainingpeaks.com/login',
  pageTitle_calendar : 'TrainingPeaks - Plan your training, track your workouts and measure your progress'
};

module.exports = {
  CreateBrowserActions: function() {
    return Object.create(browserActions);
  },
  CreateWorkouts: function () {
    return Object.create(workouts);
  }
};