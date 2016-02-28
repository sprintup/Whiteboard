Feature: LogIn
In order to test tTSS the user must log in
As the user I would like to log in
I would like to log in from the log in screen

Rules: 
-user provides username and password

	Scenario: User logs into web app using a username and password
		Given The browser opens to the login page
		When User enters username and password 
		And User clicks login button
		Then Web app should load after a period of time