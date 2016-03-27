'use strict';

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: String,
  date: String,
  status: { type: String, default: 'Unread' },
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Message', MessageSchema);
