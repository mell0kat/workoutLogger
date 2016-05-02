const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
console.log('Workout model:', Workout)
console.log('in server/routes/index')
router.get('/workouts', function(req, res, next) {
	console.log('in the cuorrect route')
	Workout.find({})
	.then(workouts => {
		console.log('found wordouts?', workouts)
		res.json(workouts)
	})
})

router.post('/workouts', function(req, res, next) {

})

module.exports = router;