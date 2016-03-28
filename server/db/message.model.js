'use strict';

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  date: String,
  status: { type: String, default: 'Unread' },
  sender_id: String
});

module.exports = mongoose.model('Message', MessageSchema);
