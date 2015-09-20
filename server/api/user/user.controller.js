'use strict';

var User = require('../../db/user.model');

var UserController = {};

UserController.signIn = function(profile, done, token) {
  User.findOne({'gid': profile.id}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      user.token  = token;
      user.name   = profile._json.displayName;

      // Save updated google info
      user.save(function() {
        if (err) {
        console.log('error updating information');
        }
      })
      return done(null, user);

      // Save new user info to database
    } else {
      var newUser    = new User();
      newUser.gid    = profile._json.id;
      newUser.token  = token;
      newUser.name   = profile._json.displayName;
      newUser.email  = profile._json.emails[0].value;
      newUser.isTech = false;

      newUser.save(function(err) {
        if (err) {
          return done(new Error(err));
        }
        return done(null, newUser);
      });
    }
  })
}

// Controls users registering as technicians
UserController.registerAsTech = function(req, res, done) {
  var uid = req.body.id;
  User.findOne({'_id': uid}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      user.isTech   = true;
      user.bio      = req.body.bio;
      user.location = req.body.location;
      user.save(function(err) {
      if (err) {
          console.log('error updating tech info.')
        }
      })
      res.cookie('isTech', user.isTech)
      res.sendStatus(200);
    }
    else {
      console.log("User not found");
      res.sendStatus(404);
    }
  })
}

UserController.saveRecievedMessage = function(req, res, done) {
  var uid = req.body.id;
  User.findOne({'_id': uid}, function(err, user) {
    if (err) {
      return done(err);
    }
    if(user) {
      user.recievedMessages.push({
        name: req.body.name,
        message: req.body.message
      })
      user.save(function(err) {
        if (err) {
          console.log('error saving recieved message.')
        }
      })
      res.sendStatus(200);
    }
  })
}

module.exports = UserController;
