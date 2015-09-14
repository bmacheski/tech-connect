'use strict';

var mongoose = require('mongoose');

// Need to decide how to structure tech/non-tech users
var UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String
})

module.exports = mongoose.model('User', UserSchema);

