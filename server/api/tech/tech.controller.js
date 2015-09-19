'use strict';

var Tech = require('../../db/tech.model');

var TechController = {};

// Create and save submitted technician profile
TechController.storeProfile = function(req, res, done) {
  // The uid is the user profile ID
  var newProfile       = new Tech();
  newProfile.uid       = req.body.id
  newProfile.name      = req.body.name;
  newProfile.location  = req.body.location;
  newProfile.bio       = req.body.bio;

  newProfile.save(function(err) {
    if (err) {
      return done(new Error(err));
    }
    res.sendStatus(202);
    return done(null, newProfile);
  });
};

module.exports = TechController;
