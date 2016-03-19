'use strict';

var mongoose = require('mongoose');

var TechnicianSchema = new mongoose.Schema({
  uid: String,
  jobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
