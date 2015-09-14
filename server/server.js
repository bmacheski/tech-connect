'use strict';

var express    = require('express')
  , chalk      = require('chalk')
  , mongoose   = require('mongoose')
  , config     = require('./config/development')
  , bodyParser = require('body-parser')
  , path       = require('path')
  , passport   = require('passport')
  , session    = require('express-session')
  , routes     = require('./routes')
  , app        = express()
  , server     = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('appPath', config.root + 'client/public');

app.use(express.static(path.join(config.root, 'client/public')));
app.use('/bower_components', express.static(path.join(config.root, 'client/bower_components')))
app.use(bodyParser.urlencoded({ extended: false }));

// Connect Mongoose to Mongo database
mongoose.connect(config.mongo.url)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configure secret for passport
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());

// Enable persistent login sessions
app.use(passport.session());

app.use('/', routes);

require('./auth/config');

server.listen(app.get('port'), function() {
  console.log(chalk.green('✔ Express server listening on port ' + app.get('port')));
});
