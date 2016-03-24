'use strict';

var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  postDate: String,
  jobDate: String,
  status: { type: String, default: 'Open' },
  // uid: String
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Job', JobSchema);
