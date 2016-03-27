'use strict';

/**
 * Module dependencies
 */

const express     = require('express')
    , chalk       = require('chalk')
    , mongoose    = require('mongoose')
    , bodyParser  = require('body-parser')
    , path        = require('path')
    , cookie      = require('cookie-parser')
    , passport    = require('passport')
    , session     = require('express-session')
    , MongoStore  = require('connect-mongo')(session)
    , http        = require('http')
    , app         = express();

/**
 * Config
 */

const routes  = require('./routes')
    , cors    = require('./config/cors')
    , config  = require('./config/environment')();

require('./auth/config');

app.set('port', process.env.PORT || 3000);
app.set('appPath', config.root + 'client/public');

app.use(express.static(path.join(config.root, 'client/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookie());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: config.sessionSecret,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

// Connect to db
mongoose.connect(config.mongo.url);

http.createServer(app).listen(app.get('port'), () => {
  console.log(chalk.green('✔ Server listening on port ' + app.get('port')));
});
