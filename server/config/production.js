'use strict';

const path = require('path');

const MONGODB_USER = process.env.MONGOLAB_USER || 'username'
  , MONGODB_PASS   = process.env.MONGOLAB_PASS || 'password';

module.exports = {
  root: path.normalize(__dirname + '/../..'),
  sessionSecret: 'bmacmantechcon',
  mongo : {
    url: process.env.MONGODB_URL || 'mongodb://' + MONGODB_USER + ':' + MONGODB_PASS +
    '@ds021969.mlab.com:21969/tech-connect'
  },
  google: {
    'clientID': '278816631764-ukaocbeaqs90h8p2lrjroaik4ponup4l.apps.googleusercontent.com',
    'clientSecret': 'q0fC7hO7QAJ9-9UVyxa6hGgY',
    'callbackURL': 'https://node-techconnect.herokuapp.com/auth/google/callback'
  }
};
