'use strict';

var User = require('./userModel');

var UserController = {};

UserController.signIn = function(profile, done, token) {
  User.findOne({'gid': profile.id}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      user.token  = token;
      user.name   = profile._json.name;
      user.email  = profile._json.email;

      // Save updated google info
      user.save(function() {
        if (err) {
        console.log('error updating information');
        }
      })
      return done(null, user);

      // Save new user info to database
    } else {
      var newUser   = new User();
      newUser.gid   = profile._json.id;
      newUser.token = token;
      newUser.name  = profile._json.name;
      newUser.email = profile._json.email;
    }
  })
}

module.exports = UserController;
