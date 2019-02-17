var passport = require("passport");
var User = require("./models/User");
var LocalStrategy = require("passport-local");
var mongoose = require("mongoose");

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function(username, password, done){
    User.findOne({email: username}, function (err, user) {
      if(err) {return done(err);}
      //return if user not found in database
      if(!user){
        return done(null,false, { message: 'User not found'});
      }
      //return if password is wrong
      if(!user.validPassword(password)) {
        return done(null,false, { message: 'Incorrect Password'});
      }
      //if correct login info
      return done(null, user);
    });
  }));
