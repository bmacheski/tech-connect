'use strict';

var mongoose = require('mongoose');

var TechnicianSchema = new mongoose.Schema({
  uid: String,
  // Jobs is an array storing all accepted jobs
  jobs: [{
    title: String,
    description: String,
    location: String,
    pid: String // Job creator ID
  }]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
