'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Promise = require('bluebird');

let exerciseSchema = new Schema({
  name: {
  	type: String, 
  	required: true
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema)