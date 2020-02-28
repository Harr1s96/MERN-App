const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username, password: password }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

router.post("/login", passport.authenticate('local', 
    {
        successRedirect: '/success',
        successFlash: "User authenticated",
        failureRedirect: '/login',
        failureFlash: 'Invalid username or password.'
    }),
    function(req, res, next) {
        res.redirect("/success")
    }

);

module.exports = router;