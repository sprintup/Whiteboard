// module.exports = {
var workouts = {
	run : {
		type 							 : 'run',
		heartRateThreshold : 150,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Run future'
	},
	bike : {
		type 							 : 'bike',
		heartRateThreshold : 150,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Bike future'
	},
	swim : {
		type 							 : 'swim',
		heartRateThreshold : 135,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Swim future'
	},
	crosstrain : {
		type 							 : 'crosstrain',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Crosstrain future'
	},
	mountainbike : {
		type 							 : 'mountainbike',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout MountainBike future'
	},
	strength : {
		type 							 : 'strength',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Strength future'
	},
	custom : {
		type 							 : 'custom',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Custom future'
	},
	xcski : {
		type 							 : 'xc-ski',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout XC-Ski future'
	},
	rowing : {
		type 							 : 'rowing',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Rowing future'
	},
	other : {
		type 							 : 'other',
		heartRateThreshold : 145,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Other future'
	},
	walk : {
		type 							 : 'walk',
		heartRateThreshold : 125,
		heartRateResting 	 : 60,
		heartRateMax 			 : 190,
		duration 				   : '1:00:00',
		className 				 : 'addWorkout Walk future'
	}
};

console.log('workouts.length '+Object.keys(workouts).length);