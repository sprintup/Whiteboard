##Update log
* The terminal command cucumberjs now opens and directs the browser to start testing. It will enter the username and password and log in. 
* Working on integrating an assertion library for tests. It currently supports the limited but functional [Node assertion libarary](https://nodejs.org/api/assert.html). Exposing the window and document objects in the step definitions can be problematic, here is an [article](https://www.custardbelly.com/blog/blog-posts/2014/02/10/cucumberjs-tests-browser/index.html). I'm exploring options. 
* Gaining access to the DOM to test validity of assertions. Functions like [getCurrentUrl()](http://appfigures.github.io/webdriver-js-api-reference/symbols/webdriver.WebDriver.html#getCurrentUrl) return promises instead of values. 
* Might consider using [Nightwatch](http://nightwatchjs.org/) for js/selenium testing instead of cucumberjs. 

### Overview
An automated code test that logs into a website, finds elements and tests caluculated values. 

### Installations
I added a package.json, so you should just be able to do npm install to install these. 
* cucumberjs: https://www.npmjs.com/package/cucumber
* selenium_web_driver: https://www.npmjs.com/package/selenium*webdriver
* zombie: https://www.npmjs.com/package/zombie

```
npm install 
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
* Browser based tool instead of CLI using [Browserfy](http://browserify.org/);

#### Tips:
* CLI Command: cucumberjs --help
* Supported Formatting styles
	* cucumberjs --format progress
* Use tags to run only certain tests
