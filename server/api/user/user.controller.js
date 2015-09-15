'use strict';

var User = require('../../db/user.model');

var UserController = {};

UserController.signIn = function(profile, done, token) {
  User.findOne({'gid': profile.id}, function(err, user) {
    console.log(profile)
    if (err) {
      return done(err);
    }
    if (user) {
      user.token  = token;
      user.name   = profile._json.displayName;
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
      newUser.name  = profile._json.displayName;
      newUser.email = profile._json.email;

      newUser.save(function(err) {
        if (err) {
          return done(new Error(err));
        }
        return done(null, newUser);
      });
    }
  })
}

module.exports = UserController;
