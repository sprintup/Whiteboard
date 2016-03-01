##Update log
* It tests with assertions through the log in screen and stops on the calendar. 
* I'm going to continue the process of inserting assertions for the steps I've already defined to test the tTSS score in the webDriver/driver.js file

### Overview
An automated code test that logs into a website, finds elements and tests caluculated values. It runs cucumberjs with Node assertions and selenium web driver using Chrome. 

### Installation and Setup
I added a package.json, so you should just be able to do npm install to install these. 
* cucumberjs: https://www.npmjs.com/package/cucumber
* zombie: https://www.npmjs.com/package/zombie
* selenium_web_driver: https://www.npmjs.com/package/selenium*webdriver

1. Clone project and navigate to the project's root directory in the terminal
2. Make sure you have [node.js](https://nodejs.org/en/) installed and run
```
npm install 
```
3. Put [Chrome binary](http://chromedriver.storage.googleapis.com/index.html) on your [path](https://sites.google.com/a/chromium.org/chromedriver/getting-started). 
4. Input site username and password in the spec/model.js file and run
```
cucumberjs
```
#### Testing
You can run 'cucumberjs' in the terminal after installing the packages (npm install) from the root directory
* Use cucumberjs in the terminal to run tests (not cucumber)
* The tests to automate are found in the other .txt files as notes. 

#### Automation
* To see it log in and run after the page loads run 'node driver.js' from inside the webDriver folder. 
* You might have to include the latest chrome web driver binary in your path for it to automate. It's available [here](http://chromedriver.storage.googleapis.com/index.html).
* You have to replace the passwords in driver.js in webDriver

#### Future Upgrades:
* Implicit wait after login
* Clean Environment after every scenario is run
* Have it take screenshots when tests fail
* Report generation for continuous integration
* Feature tags for dynamic automation
* Failed test file
* Browser based tool instead of CLI using [Browserfy](http://browserify.org/).

#### Notes:
* CLI Command: cucumberjs --help
* Supported Formatting styles
	* cucumberjs --format progress
* Use tags to run only certain tests
* Might consider using [Nightwatch](http://nightwatchjs.org/) for js/selenium testing instead of cucumberjs. 

