'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('Exercise');

console.log('Workout model:', Workout)
console.log('in server/routes/index')
router.get('/workouts', function(req, res, next) {
	console.log('in the cuorrect route')
	Workout.find({})
	.populate('boxes.performance')
	.populate('boxes.sections')
	.then(workouts => {
		console.log('found wordouts?', workouts)
		res.json(workouts)
	})
});

router.post('/workouts', function(req, res, next) {

});

router.get('/exercises', function(req, res, next) {
	console.log('getting exercises');
	return Exercise.find({})
	.then(exercises => res.send(exercises))
	.then(null, next)
});
router.post('/exercises', function(req, res, next) {
	console.log('in the post exercise route', req.body)
	Exercise.create(req.body)
	.then(exercise => res.send(exercise))
	.catch(next)
});

module.exports = router;