'use strict';

var User   = require('../../db/user.model')
 , Message = require('../../db/message.model');

var UserController = {};

UserController.signIn = function(profile, done, token) {
  User
    .findOne({ 'gid': profile.id }, function(err, user) {
      if (err) { return done(err); }

      if (user) {
        user.token = token;
        user.name  = profile._json.displayName;

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
        newUser.email = profile._json.emails[0].value;

        newUser.save(function(err) {
          if (err) { return done(new Error(err)); }
          return done(null, newUser);
        });
      }
  })
}

/**
 * Users registering as technicians
 */

UserController.registerAsTech = function(req, res, done) {
  var uid = req.body.id;

  User
    .findOne({ '_id': uid }, function(err, user) {
      if (err) { return done(err); }

      if (user) {
        user.isTech   = true;
        user.bio      = req.body.bio;
        user.location = req.body.location;
        user.save(function(err) {
          if (err) {
            console.log('error updating tech info')
          }
        })
        res.cookie('isTech', user.isTech)
        res.sendStatus(200);
      } else {
        console.log('User not found');
        res.sendStatus(404);
      }
  })
}

UserController.saveRecievedMessage = function(req, res, done) {
  var uid = req.body.id;
  var name = req.cookies.name;
  var sid = req.cookies.id;

  User
    .findOne({ '_id': uid }, function(err, user) {
      if (err) { return done(err); }

      if (user) {
        var message = new Message();

        message.name = name;
        message.message = req.body.message;
        message.date = req.body.date;
        message.senderId = sid;
        message.save();

        user.recievedMessages.push(message._id);
        user.save(function(err) {
          if (err) {
            console.log('error saving recieved message.')
          }
        })
        res.send({ message: 'Message was sent successfully.' })
      }
    })
}

UserController.findRecievedMessages = function(req, res, done) {
  User
    .findOne({ '_id' : req.cookies.id })
    .populate('recievedMessages')
    .exec(function(err, user) {
      if (err) { return done(err); }

      if (user) {
        res.send(user.recievedMessages);
      } else {
        console.log('there are no messages listed.')
      }
    })
}

UserController.removeMessage = function(req, res) {
  var id = req.cookies.id;
  var mid = req.body.mid;

  User
    .findOne({ '_id': id })
    .populate('recievedMessages')
    .exec(function(err, user) {
      if (err) { return done(err); }

      user.recievedMessages.pull({ _id: mid })
      user.save();
      res.send(user.recievedMessages);
    })
}

module.exports = UserController;
