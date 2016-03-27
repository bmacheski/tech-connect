'use strict';

const express = require('express')
  , passport  = require('passport')
  , router    = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

router.get('/auth/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user) => {
    if (err) { return next(err); }
    else {
      if (user) {
        res.cookie('user', user.email);
        res.cookie('isTech', user.is_tech);
      }
      res.redirect('/#/home');
    }
  })(req, res, next);
})

module.exports = router;
