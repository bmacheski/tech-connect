'use strict';

var mongoose = require('mongoose');

/**
 * Schema for users registered as techicians
 */

var TechnicianSchema = new mongoose.Schema({
  uid: String,
  name: String,
  location: String,
  bio: String,
  // Jobs is an array storing all accepted jobs
  jobs: [{
    ownerid: String,
    title: String,
    description: String,
    location: String
  }]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
