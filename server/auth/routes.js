var express   = require('express')
  , authCtrl  = require('./controller')
  , router    = express.Router()

router.get('/auth/google', authCtrl.authGoogle)
router.get('/auth/google/cb', authCtrl.authGoogleCb)

module.exports = router;
