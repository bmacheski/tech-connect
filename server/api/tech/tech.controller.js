'use strict';

var Tech = require('../../db/tech.model');

var TechController = {};

// Accept and store technician jobs
TechController.acceptJob = function(req, res, done) {
  Tech.findOne({'uid': req.body.id}, function(err, tech) {
    if (err) {
      return done(err);
    }
    // if technician already has profile save job info
    if(tech) {
      tech.jobs.push({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        pid: req.body.pid
      })
      tech.save(function(err) {
        if (err) {
          return done(new Error(err));
        }
      res.sendStatus(200);
      return done(null, tech);
      })
    }
    // if technician doesn't have profile create profile & save job info
    else {
      var newTech = new Tech();
      newTech.uid = req.body.id
      newTech.jobs.push({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        pid: req.body.pid
      })
      newTech.save(function(err) {
        if (err) {
          return done(new Error(err));
        }
      res.sendStatus(200);
      return done(null, newTech);
      });
    }
  })
};

TechController.findAcceptedJobs = function(req, res, done) {
  var id = req.cookies.id;
  Tech.findOne({'uid' : id},  function(err, tech) {
    if (err) {
      return done(err);
    }
    if(tech){
      var jobs = tech.jobs
      res.send(jobs);
    }
    else {
      console.log('there are no jobs listed.')
    }
  })
}

module.exports = TechController;
