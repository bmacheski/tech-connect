'use strict';

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: String,
  senderId: String
});

module.exports = mongoose.model('Message', MessageSchema);
