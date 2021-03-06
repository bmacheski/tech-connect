'use strict';

const Tech = require('../../db/tech.model')
  , User   = require('../../db/user.model');

const TechController = {};

/**
 * Accept and store technician jobs
 */

TechController.acceptJob = (req, res, done) => {
  User
    .findOne({ email: req.body.id })
    .exec((err, user) => {

      Tech
      .findOne({ 'user_id': user._id })
      .exec((err, tech) => {
        if (err) { return done(err); }

        // If technician already has profile save job info
        if (tech) {
          tech.jobs.push(req.body.jobId);

          tech.save(err => {
            if (err) { return done(err); }
          })
        }

        // If technician doesn't have profile create profile and save job info
        else {
          var newTech = new Tech();
          newTech.user_id = req.body.id;
          newTech.jobs.push(req.body.jobId);
          newTech.save(err => {
            if (err) { return done(err); }
          });
        }
      })
      res.status(200).send({ message: 'Job accepted successfully.'})
    })
};

TechController.findProfile = (req, res) => {
  User
    .findOne({ email: req.params.email })
    .exec((err, user) => {

      Tech
        .findOne({ user_id: user._id })
        .exec((err, tech) => {
          if (err) { return done(err); }

          res.status(200).send(tech);
        })
    })
}

TechController.postReview = (req, res) => {
  User
    .findOne({ email: req.params.techId })
    .exec((err, user) => {

      Tech
        .findOne({ user_id: user._id })
        .exec((err, tech) => {

          tech.reviews.push({
            message: req.body.review,
            stars: req.body.stars
          })

          tech.save((err) => {
            if (err) { return done(err); }

            res.sendStatus(200);
          })
        })
    })
}

TechController.getReview = (req, res) => {
  User
    .findOne({ email: req.params.techId })
    .exec((err, user) => {

      Tech
        .findOne({ user_id: user._id })
        .exec((err, tech) => {
          if (err) { return done(err); }

          res.status(200).send(tech.reviews);
        })
    })
}

TechController.updateProfile = (req, res) => {
  User
    .findOne({ email: req.params.email })
    .exec((err, user) => {

      Tech
        .findOne({ user_id: user._id })
        .exec((err, tech) => {
          if (err) { return done(err); }

          tech.bio      = req.body.bio;
          tech.location = req.body.location;
          tech.phone    = req.body.phone;
          tech.save(err => {
            if (err) { return done(err); }
          })

          res.sendStatus(200);
        })
    })
}

TechController.findAcceptedJobs = (req, res, done) => {
  User
    .findOne({ email: req.params.email })
    .exec((err, user) => {
      if (err) { return done(err); }
      if (user) {

        Tech
          .findOne({ user_id: user._id })
          .populate({
            path: 'jobs'
          })
          .exec((err, tech) => {
            if (err) { return done(err); }

            if (tech) {
              res.status(200).send(tech.jobs);
            } else {
              res.status(200).send({ message: 'No jobs are listed.'})
            }
          })
      } else {
        res.status(404).send({ message: 'user is not a technician.'})
      }
    })
}

module.exports = TechController;
