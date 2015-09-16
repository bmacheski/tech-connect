'use strict';

var express    = require('express')
  , passport   = require('passport')
  , controller = require('./job.controller')
  , router     = express.Router();

router.post('/job/create', controller.storeJob);

module.exports = router;

