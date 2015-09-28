'use strict';

var Job = require('../../db/job.model');

var JobController = {};

// Create and save submitted job
JobController.storeJob = function(req, res, done) {
  var newJob         = new Job();
  newJob.title       = req.body.title
  newJob.description = req.body.description;
  newJob.location    = req.body.location;
  newJob.postDate    = req.body.postDate;
  newJob.jobDate     = req.body.jobDate;
  newJob.date        = req.body.date;
  newJob.status      = 'Open';
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

JobController.updateJob = function(req, res) {
  var id = req.body.jobId;
  Job.findOne({_id: id}, function(err, job) {
    if (job) {
      job.status = 'Closed';
      job.save(function() {
        console.log('saved')
      })
    }
    res.send({message: 'Job was added successfully!'})
  })
}

JobController.findJobCount = function(req, res) {
  Job.count({status: 'Open'}, function(err, count) {
    if(err) {
      return done(err)
    }
    res.send({count: count});
  })
}

module.exports = JobController;
