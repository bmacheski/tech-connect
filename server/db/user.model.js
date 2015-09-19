'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String,
  // Technician specific profile data
  isTech: Boolean,
  bio: String,
  location: String
});

module.exports = mongoose.model('User', UserSchema);

