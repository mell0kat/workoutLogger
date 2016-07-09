console.log('in app js')
'use strict';











ReactDOM.render(
	<WorkoutListAndForm  url="api/workouts" getExercisesUrl='api/exercises'/>,
	document.getElementById('content')
);

// Native HTML elements start with lowercase, while custom React class names begin with uppercase letter
 // ReactDOM should be called last

//This is what a workout should look like
// {
//             author: 'Katherine',
//             text: 'I can\'t feel my shoulders',
//             date: new Date('April 23, 2016 09:00:00'),
//             boxes: [{
//                 instructions: 'AMRAP',
//                 performance: {
//                     rounds: 5,
//                     extraReps: 11
//                 },
//                 sections: [{
//                     num: 5,
//                     units: 'reps',
//                     exercise: createdWorkouts[4]._id,
//                     modification: 'box'
//                 },
//                 {
//                     num: 10,
//                     units: 'reps',
//                     exercise: createdWorkouts[2]._id,
//                     weight: 65
//                 },
//                 {
//                     num: 5,
//                     units: 'reps',
//                     exercise: createdWorkouts[1]._id,
//                     modification: 'banded'
//                 }]
//             }]
//         },
