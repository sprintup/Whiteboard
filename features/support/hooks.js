'use strict';

var driver = require('./world.js').getDriver();




var myHooks = function () {
  this.Before(function (scenario) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:

    // this.bootFullTextSearchServer();
    // this.createSomeUsers();
    // console.log('inside hooks.js ');
    // this.webdriver = require('selenium-webdriver'),
    // By = webdriver.By,
    // until = webdriver.until;
    // this.browser = new webdriver.Builder()  
    // .usingServer()
    // .withCapabilities({'browserName': 'chrome' })
    // .build();

    // this.browser.get('http://home.trainingpeaks.com/login');
    // this.browser.findElement(webdriver.By.id('Username')).sendKeys('');
    // this.browser.findElement(webdriver.By.id('Password')).sendKeys('');
    // this.browser.findElement(webdriver.By.id('btnSubmit')).click();
    // this.browser.sleep(15000);
    // console.log('after selenium code in step with this: ' + this);
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
    this.driver.manage().deleteAllCookies()
      .then(function() {
        callback();
      });
  });

  this.registerHandler('AfterFeatures', function (event, callback) {
    driver.quit();
    callback();
  });
};

module.exports = myHooks;

