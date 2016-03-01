'use strict';
var driver = require('./world.js').getDriver();

var myHooks = function () {
  this.World = require('../support/world').World;

  this.Before(function (scenario) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:

    // this.bootFullTextSearchServer();
    // this.createSomeUsers();
  });

  this.After(function(scenario, callback) {
    if(scenario.isFailed()) {
      // this.driver.takeScreenshot().then(function(data){
      //   var base64Data = data.replace(/^data:image\/png;base64,/,"");
      //   fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
      //       if(err) console.log(err);
      //   });
      // });
    }
    // this.driver.manage().deleteAllCookies()
    //   .then(function() {
    //     callback();
    //   });
      callback();
  });

  this.registerHandler('AfterFeatures', function (event, callback) {
    driver.quit();
    callback();
  });
};

module.exports = myHooks;

