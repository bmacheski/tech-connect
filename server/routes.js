'use strict';

var express = require('express')
  , auth    = require('./auth/routes')
  , job     = require('./api/job/job.controller')
  , router  = express.Router()

router.use('/', auth);
//router.use('/api/job', job);

module.exports = router;
