'use strict';

var express  = require('express')
  , passport = require('passport')
  , router   = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/auth/google/callback', function (req, res, next) {
  passport.authenticate('google', function(err, user) {
    if (err) {
      return next(err);
    } else {
      if (user) {
        var userObj = {
          id: user._id,
          name: user.name,
          isTech: user.isTech
        };
        res.cookie('user', JSON.stringify(userObj));
      }
      res.redirect('/#/home');
    }
  })(req, res, next);
})

module.exports = router;
