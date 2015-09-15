'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String,
  isTech: Boolean
});

module.exports = mongoose.model('User', UserSchema);

