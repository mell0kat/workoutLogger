'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const Exercise = mongoose.model('Exercise');

router.get('/workouts', function(req, res, next) {

	Workout.find({})
	.populate('boxes.performance')
	.populate('boxes.sections')
	.then(workouts => {

		res.json(workouts)
	})
});

router.post('/workouts', function(req, res, next) {

});

router.get('/exercises', function(req, res, next) {
	return Exercise.find({})
	.then(exercises => res.send(exercises))
	.then(null, next)
});
router.post('/exercises', function(req, res, next) {

	Exercise.create(req.body)
	.then(exercise => res.json(exercise))
	.then(null, next)
});

module.exports = router;
