Feature: Record Workouts 
In order to test tTSS the user must be logged in
As a logged in user I would like to record workouts
I would like to record a workout from the calendar screen

Rules: 
-user is logged into the calendar page 

	Scenario: From the Calendar page the user logs RUN with heart rate and duration
		Given The browser is open to the calendar page
		When User adds RUN with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs BIKE with heart rate and duration
		Given The browser is open to the calendar page
		When User adds BIKE with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs SWIM with heart rate and duration
		Given The browser is open to the calendar page
		When User adds SWIM with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout
		
	Scenario: From the Calendar page the user logs CROSSTRAIN with heart rate and duration
		Given The browser is open to the calendar page
		When User adds CROSSTRAIN with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs MOUNTAINBIKE with heart rate and duration
		Given The browser is open to the calendar page
		When User adds MOUNTAINBIKE with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout
		
	Scenario: From the Calendar page the user logs STRENGTH with heart rate and duration
		Given The browser is open to the calendar page
		When User adds STRENGTH with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs CUSTOM with heart rate and duration
		Given The browser is open to the calendar page
		When User adds CUSTOM with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs XC-SKI with heart rate and duration
		Given The browser is open to the calendar page
		When User adds XC-SKI with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout
		
	Scenario: From the Calendar page the user logs ROWING with heart rate and duration
		Given The browser is open to the calendar page
		When User adds ROWING with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs OTHER with heart rate and duration
		Given The browser is open to the calendar page
		When User adds OTHER with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout

	Scenario: From the Calendar page the user logs WALK with heart rate and duration
		Given The browser is open to the calendar page
		When User adds WALK with heartrate and duration
		And Inspects workout that was just added
		Then the tTSS score should equal 100
		And Delete workout
		
