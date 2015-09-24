'use strict';

var Job = require('../../db/job.model');

var JobController = {};

// Create and save submitted job
JobController.storeJob = function(req, res, done) {
  var newJob         = new Job();
  newJob.title       = req.body.title
  newJob.description = req.body.description;
  newJob.location    = req.body.location;
  newJob.date        = req.body.date;
  newJob.uid         = req.body.uid;

  newJob.save(function(err) {
    if (err) {
      return done(new Error(err));
    }
    res.send({message: 'Job was sucessfully created!'})
    return done(null, newJob);
  });
};

// Find all available jobs
JobController.findJobs = function(req, res) {
  Job.find({}, function(err, jobs) {
    res.send(jobs);
  })
}

// Find all user(non-tech) posted jobs
JobController.findCurrentJobs = function(req, res, next) {
  var uid = req.cookies.id;
  Job.find({uid: uid}, function(err, jobs) {
    res.send(jobs);
  })
}

module.exports = JobController;
