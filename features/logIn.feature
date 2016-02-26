Feature: LogIn
	Scenario: User logs into web app using a username and password
		Given The browser opens to the login page
		When User enters username
		And User enters password
		And User clicks login button
		Then Web app should load after a period of time