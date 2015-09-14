var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  gid: String,
  token: String,
  name: String,
  email: String,
  isTech: Boolean
})

var User = mongoose.model('User', UserSchema);

module.exports = User;
