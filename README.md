##Update log
* I found this [example](https://github.com/Matt-B/cucumber-js-selenium-webdriver-example) that launches a browser with cucumberjs command, but I'm still recreating it in this project because I don't want to use everything that project is using. 

* Tests fail on user login. You can run the driver.js file with 'node driver' and watch it log a run with the proper time, save and reenter to view the tSS. I'm working on integrating a test for this using cucumber. 

### Overview
I still have to bind and sequence testing and automation. However, they are both started in their respective files. I used cucumberjs and seleniumjs, which were both not the native language. Given more time, I could learn Java to implement this testing scenario, as I've learned a great deal for how they work in Java. 

### Installations
I added a package.json, so you should just be able to do npm install to install these. 
* cucumberjs: https://www.npmjs.com/package/cucumber
* selenium_web_driver: https://www.npmjs.com/package/selenium*webdriver
* zombie: https://www.npmjs.com/package/zombie

```
npm install 

```
#### Testing
You can run 'cucumberjs' in the terminal after installing the packages (npm install) from the root directory
* Use cucumberjs in the terminal to run tests (not cucumber)
* The test that runs is an example test. 
* The tests to automate are found in the other .txt files as notes. Once I get to automation, I'll mix these

#### Automation
* To see it log in and run after the page loads run 'node.driver' from inside the webDriver folder. 
* You might have to include the latest chrome web driver binary in your path for it to automate. It's available [here](http://chromedriver.storage.googleapis.com/index.html);
* You have to replace the passwords in driver.js in webDriver

##### Future Upgrades:
* Implicit wait after login
* Clean Environment after every scenario is run.
* Put username and password in config file

#### Tips:
* CLI Command: cucumberjs --help
* Supported Formatting styles
	* cucumberjs --format progress
