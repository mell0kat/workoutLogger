'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Promise = require('bluebird');
let Exercise = mongoose.model('Exercise');

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

module.exports = sectionSchema;
