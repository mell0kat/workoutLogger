'use strict';
let mongoose = require('mongoose');
let Promise = require('bluebird');
let chalk = require('chalk');
let connectToDb = require('./server/db');
let Section = Promise.promisifyAll(mongoose.model('Section'));
let Exercise = Promise.promisifyAll(mongoose.model('Exercise'));
let Box = Promise.promisifyAll(mongoose.model('Box'));
let Workout = Promise.promisifyAll(mongoose.model('Workout'));


let seedExercises = function() {
    let exercises = [
        {
            name: 'hand-stand push-ups'
        },
        {
            name: 'pull-ups'
        },
        {
            name: 'front-rack squats'
        },
        {
            name: 'back-squats'
        },
        {
            name: 'hand-stand push-ups'
        },
         {
            name: 'muscle-ups'
        },
        {
            name: 'ring dips'
        },
        {
            name: 'box jumps'
        },
    ]
    return Promise.map(exercises, exercise => Exercise.create(exercise))
};
console.log(seedExercises)
let seedWorkout = function () {

    let workouts = [
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
                    exercise: seedExercises[4]._id,
                    modification: 'box'
                },
                {
                    num: 10,
                    units: 'reps',
                    exercise: seedExercises[2]._id,
                    weight: 65
                },
                {
                    num: 5,
                    units: 'reps',
                    exercise: seedExercises[1]._id,
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
                    exercise: seedExercises[3]._id,
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
                    exercise: seedExercises[5]._id,
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 10,
                    units: 'reps',
                    exercise: seedExercises[7]._id,
                },
                {
                    num: 8,
                    units: 'reps',
                    exercise: seedExercises[5]._id,
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 8,
                    units: 'reps',
                    exercise: seedExercises[7]._id,
                },
                {
                    num: 6,
                    units: 'reps',
                    exercise: seedExercises[5]._id,
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 6,
                    units: 'reps',
                    exercise: seedExercises[7]._id,
                },
                {
                    num: 4,
                    units: 'reps',
                    exercise: seedExercises[5]._id,
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 4,
                    units: 'reps',
                    exercise: seedExercises[7]._id,
                },
                {
                    num: 2,
                    units: 'reps',
                    exercise: seedExercises[5]._id,
                    modification: 'ring dips & push-ups'
                },
                {
                    num: 2,
                    units: 'reps',
                    exercise: seedExercises[7]._id,
                }]
            },
            ]
        }
    ];
    return Workout.createAsync(workouts);
}; 

connectToDb.then(function () {
    Workout.findAsync({}).then(function (workouts) {
        if (workouts.length === 0) {
            return seedWorkout();
        } else {
            console.log(chalk.magenta('Workouts have been seeded!'));
            process.kill(0);
        }
    })
});