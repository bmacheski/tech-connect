'use strict';

var express    = require('express')
  , auth       = require('./auth/routes')
  , controller = require('./api/job/job.controller')
  , router     = express.Router();

router.use('/', auth);
router.post('/api/job/create', controller.storeJob);
router.get('/api/job/all', controller.findJobs);

module.exports = router;
