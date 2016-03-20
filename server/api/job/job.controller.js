'use strict';

var Job = require('../../db/job.model');

var JobController = {};

/**
 * Create and save submitted job
 */
JobController.createJob = function(req, res, done) {
  var newJob         = new Job();
  newJob.title       = req.body.title
  newJob.description = req.body.description;
  newJob.location    = req.body.location;
  newJob.postDate    = req.body.postDate;
  newJob.jobDate     = req.body.jobDate;
  newJob.date        = req.body.date;
  newJob.uid         = req.body.uid;

  newJob.save(function(err) {
    if (err) { return done(err); }

    res.status(200).send({ message: 'Job sucessfully created!' });

    return done(null, newJob);
  });
};

/**
 * Find all available jobs
 */
JobController.findJobs = function(req, res) {
  Job
    .find({}, function(err, jobs) {
      res.send(jobs);
    })
}

/**
 * Find all user (non-tech) posted jobs
 */
JobController.findCurrentJobs = function(req, res, next) {
  Job
    .find({ uid: req.cookies.id }, function(err, jobs) {
      res.send(jobs);
    })
}

JobController.updateJob = function(req, res) {
  Job
    .findOne({ _id: req.body.jobId }, function(err, job) {
      if (job) {
        job.status = 'Closed';
        job.save(function() {
          console.log('job upated.')
        })
      }
      res.status(200).send({ message: 'Job was added successfully.' })
    })
}

JobController.findJobCount = function(req, res) {
  Job
    .count({ status: 'Open' }, function(err, count) {
      if (err) { return done(err); }

      res.status(200).send({ count: count });
    })
}

module.exports = JobController;
