'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String,
  posted_jobs: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
  ],
  received_messages: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
  ],
  is_tech: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
