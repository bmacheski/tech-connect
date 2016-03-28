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

  console.log(req.body)

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

TechController.updateProfile = (req, res) => {
  User
    .findOne({ email: req.params.email })
    .exec((err, user) => {

      Tech
        .findOne({ user_id: user._id })
        .exec((err, tech) => {
          if (err) { return done(err); }

          tech.bio = req.body.bio;
          tech.location = req.body.location;
          tech.save(err => {
            if (err) { return done(err); }
          })

          res.sendStatus(200);
        })
    })
}

TechController.findAcceptedJobs = (req, res, done) => {
  console.log(req.params.email)
  User
    .findOne({ email: req.params.email })
    .exec((err, user) => {
      if (err) { return done(err); }
      if (user) {
        console.log(user)
        console.log(user._id)
        Tech
          .findOne({ user_id: user._id })
          .populate({
            path: 'jobs'//,
            // populate: {
            //   path: 'posted_by',
            //   select: 'name',
            //   model: 'User'
            // }
          })
          .exec((err, tech) => {
            console.log('hereeee')
            console.log(tech)
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
  // Tech
  //   .findOne({ email: req.params.email })
  //   .populate({
  //     path: 'jobs',
  //     populate: {
  //       path: 'posted_by',
  //       select: 'name',
  //       model: 'User'
  //     }
  //   })
  //   .exec(function(err, tech) {
  //     if (err) { return done(err); }

  //     if (tech) {
  //       res.status(200).send(tech.jobs);
  //     } else {
  //       res.status(200).send({ message: 'No jobs are listed.'})
  //     }
  // })
  // }

module.exports = TechController;
