'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let performanceSchema = new Schema({
  rounds: Number,
  extraReps: Number,
  time: Number,
  units: {
    type: String,
    enum: ['reps', 'seconds', 'mins']
  },
  weights: [Number]
});

module.exports = performanceSchema;
