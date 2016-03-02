##Update log
* It tests all excercises.
* The tests almost pass for all excercises, but some give a StaleElementReferenceError. This is a race condition and I'm working on it. ([link](https://bocoup.com/weblog/a-day-at-the-races))
* I just watched and amazing [video](https://vimeo.com/96425312?ref=tw-share) on the javascript event loop. I'm digesting it so I can figure out the race condition issue.

### Overview
An automated code test that logs into a website, finds elements and tests caluculated values. It runs [cucumberjs](https://github.com/cucumber/cucumber-js) with [Node assertions](https://nodejs.org/api/assert.html) and [selenium web driver](http://appfigures.github.io/webdriver-js-api-reference/symbols/webdriver.WebDriver.html) using Chrome. 

### Installation
I added a package.json, so you should just be able to do `npm install` to install these. 
* cucumberjs: https://www.npmjs.com/package/cucumber
* zombie: https://www.npmjs.com/package/zombie
* selenium_web_driver: https://www.npmjs.com/package/selenium*webdriver

#### Setup
1. Clone project and navigate to the project's root directory in the terminal
2. Make sure you have [node.js](https://nodejs.org/en/) installed 
3. Put [Chrome binary](http://chromedriver.storage.googleapis.com/index.html) on your [path](https://sites.google.com/a/chromium.org/chromedriver/getting-started)
4. Input site username and password in the spec/model.js file and run
```
npm install 
cucumberjs features/shared/login.feature features/recordWorkouts.feature 
```

#### Features:
* Extensible by setting up different platforms in the features/support/world.js file
* Maintainable by using singleton design pattern to insert data throughout steps in spec/model.js file
* DRY by specifying particular ordered features straight in the command line 
* CLI help: `cucumberjs --help`
* Supported Formatting styles
	* `cucumberjs --format progress`
* Use [tags](https://github.com/cucumber/cucumber/wiki/Tags) to run only certain tests

#### Testing
You can run 'cucumberjs' in the terminal after installing the packages (npm install) from the root directory
* Use cucumberjs in the terminal to run tests (not cucumber)
* The tests to automate are found in the other .txt files as notes. 

#### Automation
* To see it log in and run after the page loads run 'node driver.js' from inside the webDriver folder. 
* You might have to include the latest chrome web driver binary in your path for it to automate. It's available [here](http://chromedriver.storage.googleapis.com/index.html).
* You have to replace the passwords in driver.js in webDriver

### Future Upgrades:
* Implicit wait after login
* Clean Environment after every scenario is run
* Have it take screenshots when tests fail
* Report generation for continuous integration
* Feature tags for dynamic automation
* Move all css classes and ids into model or 'page objects'
* Failed test file 
* Call stack file
* Browser based tool instead of CLI using [Browserfy](http://browserify.org/).

### Notes:
* Might consider using [Nightwatch](http://nightwatchjs.org/) for js/selenium testing instead of cucumberjs. 

