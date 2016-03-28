'use strict';

const Job  = require('../../db/job.model')
  , User   = require('../../db/user.model');

const JobController = {};

/**
 * Create and save submitted job.
 */

JobController.createJob = (req, res, done) => {
  let newJob         = new Job();
  newJob.title       = req.body.title
  newJob.description = req.body.description;
  newJob.location    = req.body.location;
  newJob.post_date   = req.body.postDate;
  newJob.job_date    = req.body.jobDate;
  newJob.date        = req.body.date;
  newJob.posted_by   = req.body.email;

  User
    .findOne({ email: req.body.email })
    .exec((err, user) => {
      if (err) { return done(err); }

      user.posted_jobs.push(newJob._id);
      user.save(err => {
        if (err) { return done(err); }
      });
    })

    newJob.save(function(err) {
      if (err) { return done(err); }

      return done(null, newJob);
    });

    res.status(200).send({ message: 'Job sucessfully created!' });
};

/**
 * Find all available jobs.
 */

JobController.findJobs = (req, res) => {
  Job
    .find({}, (err, jobs) => {
      if (err) { return done(err); }

      res.status(200).send(jobs);
    })
}

/**
 * Find all user (non-tech) posted jobs
 */

JobController.findCurrentJobs = (req, res, next) => {
  Job
    .find({ uid: req.cookies.id }, (err, jobs) => {
      if (err) { return done(err); }

      res.status(200).send(jobs);
    })
}

JobController.removeJob = (req, res, next) => {
  Job
    .findByIdAndRemove(req.body.id)
    .exec((err) => {
      if (err) { return done(err); }

      res.sendStatus(200);
    })
}

/**
 * Update job with `closed` status.
 */

JobController.updateJob = function(req, res) {
  Job
    .findOne({ _id: req.body.jobId }, function(err, job) {
      if (err) { return done(err); }
      if (job) {
        job.status = 'Closed';

        job.save(err => {
          if (err) { return done(err); }

          res.status(200).send({ message: 'Job was added successfully.' })
        })
      }

    })
}

/**
 * Find all open jobs count.
 */

JobController.findJobCount = (req, res) => {
  Job
    .count({ status: 'Open' }, (err, count) => {
      if (err) { return done(err); }

      res.status(200).send({ count: count });
    })
}

module.exports = JobController;
