'use strict';

const mongoose = require('mongoose');

const TechnicianSchema = new mongoose.Schema({
  bio: String,
  location: String,
  phone: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  jobs: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Job' } // Jobs accepted by the technician
  ],
  reviews: [
    { message: String, stars: Number }
  ]
});

module.exports = mongoose.model('Technician', TechnicianSchema);
