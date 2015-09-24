'use strict';

var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  postDate: String,
  jobDate: String,
  uid: String
});

module.exports = mongoose.model('Job', JobSchema);
