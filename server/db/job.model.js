'use strict';

const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  post_date: String,
  job_date: String,
  posted_by: String,
  status: { type: String, default: 'Open' },
  accepted_by: String
});

module.exports = mongoose.model('Job', JobSchema);
