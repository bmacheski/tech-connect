'use strict';

var express        = require('express')
  , auth           = require('./auth/routes')
  , jobController  = require('./api/job/job.controller')
  , techController = require('./api/tech/tech.controller')
  , router         = express.Router();

router.use('/', auth);

// Job routes
router.post('/api/job/create', jobController.storeJob);
router.get('/api/job/all', jobController.findJobs);

// Technician routes
router.post('/api/tech/create', techController.storeProfile);

module.exports = router;
