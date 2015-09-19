'use strict';

var mongoose = require('mongoose');

var TechnicianSchema = new mongoose.Schema({
  uid: String,
  // Jobs is an array storing all accepted jobs
  jobs: [{
    ownerid: String,
    title: String,
    description: String,
    location: String
  }]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
