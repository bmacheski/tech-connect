'use strict';

var path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../..'),
  sessionSecret: 'bmacmantechcon',
  mongo : {
    url: 'mongodb://localhost:27017/techTest',
  },
  google: {
    'clientID': '1078873529481-id12h901lcl7geqendql0l46bv712g3b.apps.googleusercontent.com',
    'clientSecret': 'HGCJiHAY2YY9Cgl7hqwaqcbI',
    'callbackURL': "http://127.0.0.1:3000/auth/google/callback"
  }
};

