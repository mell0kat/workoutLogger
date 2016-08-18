import React from 'react';
import {render} from 'react-dom';

import WorkoutListAndForm from './WorkoutListAndForm.jsx';

let data =[
        {
            author: 'Katherine',
            text: 'I can\'t feel my shoulders',
            date: new Date('April 23, 2016 09:00:00'),
            boxes: [{
                instructions: 'AMRAP',
                performance: {
                    rounds: 5,
                    extraReps: 11
                },
                sections: [{
                    num: 5,
                    units: 'reps',
                    exercise: 'pushups',
                    modification: 'box'
                },
                {
                    num: 10,
                    units: 'reps',
                    exercise: 'another exercise',
                    weight: 65
                },
                {
                    num: 5,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'banded'
                }]
            }]
        },
        {
            author: 'Tyler',
            text: 'Slow n Steady',
            date: new Date('April 25, 2016 19:00:00'),
            boxes: [{
                instructions: 'E3:30OM',
                performance: {
                    weights: [115, 120, 120, 120, 120]
                },
                sections: [{
                    num: 3,
                    units: 'reps',
                    exercise: 'another exercise',
                    percent1RM: 88
                }]
            },
            {
                instructions: 'For Time',
                performance: {
                    time: 11.5,
                    units: 'mins'
                },
                sections: [{
                    num: 10,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 10,
                    units: 'reps',
                    exercise: 'another exercise',
                },
                {
                    num: 8,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 8,
                    units: 'reps',
                    exercise: 'another exercise',
                },
                {
                    num: 6,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 6,
                    units: 'reps',
                    exercise: 'another exercise',
                },
                {
                    num: 4,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 4,
                    units: 'reps',
                    exercise: 'another exercise',
                },
                {
                    num: 2,
                    units: 'reps',
                    exercise: 'another exercise',
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 2,
                    units: 'reps',
                    exercise: 'another exercise',
                }]
            },
            ]
        }
    ];


class App extends React.Component {
	render () {
		return (
			<div>
				<p>Hello There!</p>
                <WorkoutListAndForm getExercisesUrl="/api/exercises" url="/api/workouts"/>
			</div>
			)
	}
}

render(<App/>, document.getElementById('content'));


