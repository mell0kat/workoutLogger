'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boxSchema = require('./box.js');

let workoutSchema = new Schema({
  author: String,
  text: String,
  date: {
    type: Date,
    default: Date.now()
  },
  boxes: [boxSchema]
});


mongoose.model('Workout', workoutSchema)
