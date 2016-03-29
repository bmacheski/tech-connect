'use strict';

const express      = require('express')
  , auth           = require('./auth/routes')
  , jobController  = require('./api/job/job.controller')
  , techController = require('./api/tech/tech.controller')
  , userController = require('./api/user/user.controller')
  , router         = express.Router();

// Authentication routes
router.use('/', auth);

// Job routes
router.post('/api/job/create', jobController.createJob);
router.post('/api/job/update', jobController.updateJob)
router.post('/api/job/remove', jobController.removeJob);
router.get('/api/job/all', jobController.findJobs);
router.get('/api/job/current/:email', jobController.findCurrentJobs);
router.get('/api/job/count', jobController.findJobCount);

// Technician routes
router.get('/api/acceptjobs/:email', techController.findAcceptedJobs)
router.get('/api/tech/profile/:email', techController.findProfile)
router.put('/api/tech/profile/:email', techController.updateProfile)
router.post('/api/tech/create', userController.registerAsTech);
router.post('/api/tech/job/accept', techController.acceptJob)

// User related routes
router.post('/api/user/message', userController.saveReceivedMessage)
router.get('/api/user/message/:email', userController.findReceivedMessages)
router.put('/api/user/message/:messageId', userController.handleMarkAsRead)
router.post('/api/job/message', userController.removeMessage)

module.exports = router;
