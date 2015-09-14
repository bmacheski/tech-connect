'use strict';

var express    = require('express')
  , chalk      = require('chalk')
  , mongoose   = require('mongoose')
  , config     = require('./config/development')
  , bodyParser = require('body-parser')
  , path       = require('path')
  , routes     = require('./routes')
  , app        = express()
  , server     = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('appPath', config.root + 'client/public');

app.use(express.static(path.join(config.root, 'client/public')));
app.use('/bower_components', express.static(path.join(config.root, 'client/bower_components')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// Connect Mongoose to Mongo database
mongoose.connect(config.mongo.url)

require('./auth/config');

server.listen(app.get('port'), function() {
  console.log(chalk.green('✔ Express server listening on port ' + app.get('port')));
});
