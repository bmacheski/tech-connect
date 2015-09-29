'use strict';

var path = require('path');
var MONGODB_USER = process.env.MONGOLAB_USER || 'bmac';
var MONGODB_PASSWORD = process.env.MONGOLAB_PASS || 'password';

module.exports = {
  root: path.normalize(__dirname + '/../..'),
  sessionSecret: 'bmacmantechcon',
  mongo : {
    url: process.env.MONGODB_URL || 'mongodb://' + MONGODB_USER + ':' + MONGODB_PASSWORD +
    '@ds051933.mongolab.com:51933/tech-connectdb'
  },
  google: {
    'clientID': '1078873529481-id12h901lcl7geqendql0l46bv712g3b.apps.googleusercontent.com',
    'clientSecret': 'HGCJiHAY2YY9Cgl7hqwaqcbI',
    'callbackURL': "https://tech-connect.herokuapp.com/auth/google/callback"
  }
};
