'use strict';

var express     = require('express')
  , chalk       = require('chalk')
  , mongoose    = require('mongoose')
  , bodyParser  = require('body-parser')
  , path        = require('path')
  , cookie      = require('cookie-parser')
  , passport    = require('passport')
  , session     = require('express-session')
  , MongoStore  = require('connect-mongo')(session)
  , routes      = require('./routes')
  , cors        = require('./config/cors')
  , config      = require('./config/environment')()
  , app         = express()
  , server      = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.set('appPath', config.root + 'client/public');

require('./auth/config');

app.use(express.static(path.join(config.root, 'client/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookie());

// Connect to db
mongoose.connect(config.mongo.url);

app.use(session({
    secret: config.sessionSecret,
    store: new MongoStore({ mongoose_connection: mongoose.connection })
}));

// Initialize passport
app.use(passport.initialize());

// Enable persistent login sessions
app.use(passport.session());
app.use('/', routes);

server.listen(app.get('port'), function() {
  console.log(chalk.green('✔ Express server listening on port ' + app.get('port')));
});
