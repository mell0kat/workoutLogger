'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Promise = require('bluebird');

let workoutSchema = new Schema({
	author: String,
	text: String,
	date: {
    type:Date,
    default: Date.now()
  },
	boxes: {
    type: [boxSchema],
    required: true
  }, 
  height: String,
  width: String,
  left: String,
  top: String,
  userItem: Boolean
});


let boxSchema = new Schema({
  instructions: String,
  performance: {
    rounds: Number,
    extraReps: Number,
    time: Number, 
    units: {
      type: String,
      enum: ['reps', 'seconds', 'mins']
    }
  },
  sections: {
    type: [sectionSchema],
    required: true
  }
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
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  },
  modification: String
});

let exerciseSchema = new Schema({
  name: String,
  required: true
});

mongoose.model('Workout', workoutSchema)
mongoose.model('Box', boxSchema)
mongoose.model('Section', sectionSchema)
mongoose.model('Exercise', exerciseSchema)
