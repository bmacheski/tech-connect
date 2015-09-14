'use strict';

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
  , config         = require('../config/development')
  , passport       = require('passport')
  , User           = require('../db/userModel')
  , UserController = require('../db/userController');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    UserController.signIn(profile, done, token)
  }
));
