var passport = require('passport');

module.exports.authGoogle = passport.authenticate('google');
module.exports.authGoogleCb = passport.authenticate('google', {failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  };
