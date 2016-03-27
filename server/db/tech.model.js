'use strict';

const mongoose = require('mongoose');

const TechnicianSchema = new mongoose.Schema({
  bio: String,
  location: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  jobs: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Job' } // All jobs accepted by the technician
  ]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
