'use strict';

var Job = require('../../db/job.model');

var JobController = {};

JobController.storeJob = function(req, res, done) {
  // Create and save submitted job
  var newJob         = new Job();
  newJob.title       = req.body.title
  newJob.description = req.body.description;
  newJob.location    = req.body.location;

  newJob.save(function(err) {
    if (err) {
      return done(new Error(err));
    }
    return done(null, newJob);
  });
};

JobController.findJobs = function(req, res) {
  Job.find({}, function(err, jobs) {
    res.send(jobs);
  })
}

module.exports = JobController;
