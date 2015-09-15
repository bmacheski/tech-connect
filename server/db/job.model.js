'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  state: String
});

module.exports = mongoose.model('Job', JobSchema);
