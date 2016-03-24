'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String,
  // postedJobs: [{
  //   title: String,
  //   description: String,
  //   location: String
  // }],
  postedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  recievedMessages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
  isTech: { type: Boolean, default: false },  // **
  bio: String,                                // * Technician specific profile data
  location: String                            // */
});

module.exports = mongoose.model('User', UserSchema);
