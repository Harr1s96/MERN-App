const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require("../../database/sequelizeMain");

const router = express.Router();

passport.use("local", new LocalStrategy({ passReqToCallback: true },
  function(request, user, password, done) {
  if (request.body.username === "admin") {
    return done(null, user);
  }
  else {
    return done(null, false);
  }
}
  
));

router.post("/login", passport.authenticate('local',
  {
    failureRedirect: "/testAPI"
  }),
    function(req, res, next) {
        res.redirect("/");
    }
);

module.exports = router;

// function(request, username, password, done) {
//   userModel.findOne({
//     username: request.body.username,
//     password: request.body.password
//   },
//   function (err, user) {
//     if (err) { 
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (!user.validPassword(request.body.password)) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user);
//   });
// } 

// function(request, user, password, done) {
//   if (request.body.username === "admin") {
//     console.log(request.body.username);
//     return done(null, user);
//   }
// }