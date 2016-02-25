Overview: I still have to bind and sequence testing and automation. However, they are both started in their respective files. I used cucumberjs and seleniumjs, which were both not the native language. Given more time, I could learn Java to implement this testing scenario, as I've learned a great deal for how they work in Java. 

Installations: I added a package.json, so you should just be able to do npm install to install these. 
-cucumberjs: https://www.npmjs.com/package/cucumber
-selenium_web_driver: https://www.npmjs.com/package/selenium-webdriver
-zombie: https://www.npmjs.com/package/zombie

Testing: You can run 'cucumberjs' in the terminal after installing the packages (npm install) from the root directory
-Use cucumberjs in the terminal to run tests (not cucumber)
-The test that runs is an example test. 
-The tests to automate are found in the other .txt files as notes. Once I get to automation, I'll mix these

Automation: 
-To see it log in and run after the page loads run 'node.driver' from inside the webDriver folder. 
-You might have to include the latest chrome web driver binary in your path for it to automate. 
-You have to replace the passwords in driver.js in webDriver
