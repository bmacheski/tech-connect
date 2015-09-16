'use strict';

var Job = require('../../db/job.model');

var JobController = {};

JobController.storeJob = function(req, res) {
  console.log(req.body)
  //var job = new Job();
  //Job.insert()
};

module.exports = JobController;
