'use strict';

var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String
});

module.exports = mongoose.model('Job', JobSchema);
