'use strict';

const path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../..'),
  sessionSecret: 'bmacmantechcon',
  mongo : {
    url: 'mongodb://localhost:27017/techTest',
  },
  google: {
    'clientID': '278816631764-ukaocbeaqs90h8p2lrjroaik4ponup4l.apps.googleusercontent.com',
    'clientSecret': 'q0fC7hO7QAJ9-9UVyxa6hGgY',
    'callbackURL': "http://localhost:3000/auth/google/callback"
  }
};
