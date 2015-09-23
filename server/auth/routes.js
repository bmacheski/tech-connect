'use strict';

var express   = require('express')
  , passport  = require('passport')
  , router    = express.Router()

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] // 'https://www.googleapis.com/auth/plus.login'
}))
router.get('/auth/google/callback', function (req, res, next) {
  passport.authenticate('google', function(err, user) {
    if (err) {
      return next(err);
    } else {
      if (user) {
        res.cookie('id', user.id)
        res.cookie('isTech', user.isTech)
        res.cookie('name', user.name)
      }
      res.redirect('/#/home')
    }
  })(req, res, next);
})

module.exports = router;
