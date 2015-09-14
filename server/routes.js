'use strict';

var express = require('express')
  , router  = express.Router()
  , auth    = require('./auth/routes');

router.use('/', auth)

module.exports = router;
