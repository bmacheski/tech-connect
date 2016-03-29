'use strict';

const User  = require('../../db/user.model')
  , Message = require('../../db/message.model')
  , Tech    = require('../../db/tech.model');

const UserController = {};

UserController.signIn = (profile, done, token) => {
  User
    .findOne({ 'gid': profile.id }, (err, user) => {
      if (err) { return done(err); }

      if (user) {
        user.token = token;
        user.name  = profile._json.displayName;

        // Save updated google info
        user.save((err) => {
          if (err) { return done(err); }
        })

       return done(null, user);

      // Save new user information
      } else {
        let newUser   = new User();
        newUser.gid   = profile._json.id;
        newUser.token = token;
        newUser.name  = profile._json.displayName;
        newUser.email = profile._json.emails[0].value;

        newUser.save(err => {
          if (err) { return done(err); }

          return done(null, newUser);
        });
      }
  })
}

/**
 * Users registering as technicians
 */

UserController.registerAsTech = (req, res, done) => {
  User
    .findOne({ 'email': req.body.email }, (err, user) => {
      if (err) { return done(err); }

      if (user) {
        user.is_tech  = true;

        user.save(err => {
          if (err) { return done(err); }
        })

        let tech        = new Tech();
        tech.user_id    = user._id;
        tech.bio        = req.body.bio;
        tech.phone      = req.body.phone;
        tech.location   = req.body.location;

        tech.save(err => {
          if (err) { return done(err); }
        })

        res.cookie('isTech', user.is_tech);
        res.sendStatus(200);
      } else {
        res.status(403).send({ message: 'User not found.' });
      }
    })
}

UserController.saveReceivedMessage = function(req, res, done) {
  User
    .findOne({ 'email': req.body.id }, (err, user) => {
      if (err) { return done(err); }

      if (user) {
        let message       = new Message();
        message.message   = req.body.message;
        message.date      = req.body.date;
        message.sender_id = req.body.sid;
        message.save();

        user.received_messages.push(message._id);
        user.save(err => {
          if (err) { return done(err); }
        })

        res.send({ message: 'Message sent successfully.' })
      }
    })
}

UserController.findReceivedMessages = (req, res, done) => {
  User
    .findOne({ 'email' : req.params.email })
    .populate({
      path: 'received_messages'
    })
    .exec((err, user) => {
      if (err) { return done(err); }

      if (user) {
        res.status(200).send(user.received_messages);
      } else {
        res.status(200).send({ message: 'No messages listed.' });
      }
    })
}

UserController.handleMarkAsRead = (req, res) => {
  Message
    .findById(req.params.messageId)
    .exec((err, message) => {
      message.status = 'Read';
      message.save(err => {
        if (err) { return done(err); }

        res.sendStatus(200);
      })
    })
}

UserController.removeMessage = (req, res) => {
  User
    .findOne({ 'email': req.body.userId })
    .exec((err, user) => {
      if (err) { return done(err); }

      user.received_messages.pull(req.body.mid)
      user.save(err => {
        if (err) { return done(err); }

        res.sendStatus(200);
      });
    })
}

module.exports = UserController;
