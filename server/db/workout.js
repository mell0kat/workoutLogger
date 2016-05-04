'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Promise = require('bluebird');

let performanceSchema = new Schema({
    rounds: Number,
    extraReps: Number,
    time: Number, 
    units: {
      type: String,
      enum: ['reps', 'seconds', 'mins']
    },
    weights:[Number]
})
let sectionSchema = new Schema({
  num: {
    type: Number,
    required: true
  },
  units: {
    type: String,
    enum: ['reps', 'seconds', 'mins']
  },
  exercise: {
    type: Schema.ObjectId,
    ref: 'Exercise'
  },
  modification: String,
  weight: Number,
  percent1RM: Number
});

mongoose.model('Section', sectionSchema)

let boxSchema = new Schema({
  instructions: String,
  performance: [performanceSchema],
  sections: [sectionSchema]
})

mongoose.model('Box', boxSchema)

let workoutSchema = new Schema({
	author: String,
	text: String,
	date: {
    type:Date,
    default: Date.now()
  },
	boxes: [boxSchema]
});


mongoose.model('Workout', workoutSchema)



