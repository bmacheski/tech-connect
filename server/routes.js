'use strict';

var express        = require('express')
  , auth           = require('./auth/routes')
  , jobController  = require('./api/job/job.controller')
  , techController = require('./api/tech/tech.controller')
  , userController = require('./api/user/user.controller')
  , router         = express.Router();

router.use('/', auth);

// Job routes
router.post('/api/job/create', jobController.storeJob);
router.get('/api/job/all', jobController.findJobs);
router.get('/api/job/current', jobController.findCurrentJobs)

// Technician routes
router.get('/api/acceptjobs', techController.findAcceptedJobs)
router.post('/api/tech/create', userController.registerAsTech);
router.post('/api/tech/job/accept', techController.acceptJob)

// User related routes
router.post('/api/user/message', userController.saveRecievedMessage)
router.get('/api/user/message/all', userController.findRecievedMessages)

module.exports = router;
