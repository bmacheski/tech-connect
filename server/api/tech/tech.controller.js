'use strict';

var Tech = require('../../db/tech.model');

var TechController = {};

// Accept and store technician jobs
TechController.acceptJob = function(req, res, done) {
  Tech
    .findOne({ 'uid': req.body.id }, function(err, tech) {
      if (err) { return done(err); }

      // if technician already has profile save job info
      if (tech) {
        tech.jobs.push(req.body.jobId);
        tech.save(function(err) {
          if (err) { return done(err); }
        })
      }

      // if technician doesn't have profile create profile & save job info
      else {
        var newTech = new Tech();
        newTech.uid = req.body.id;
        newTech.jobs.push(req.body.jobId);
        newTech.save(function(err) {
          if (err) { return done(err); }
        });
      }
    })
    res.status(200).send({ message: 'Job accepted successfully.'})
};

TechController.findAcceptedJobs = function(req, res, done) {
  Tech
  .findOne({ 'uid' : req.cookies.id })
  .populate('jobs')
  .exec(function(err, tech) {
      if (err) { return done(err); }

      if (tech) {
        res.status(200).send(tech.jobs);
      } else {
        console.log('There are no jobs listed.');
      }
  })
}

module.exports = TechController;
