'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const performanceSchema = require('./performance');
const sectionSchema = require('./section');

let boxSchema = new Schema({
  instructions: String,
  performance: [performanceSchema],
  sections: [sectionSchema]
})
module.exports = boxSchema;
