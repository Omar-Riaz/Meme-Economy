//extensions of mongoose
//Require Mongoose = ODM: object document mapper - defines opbjects, handles committing stuff to database while also validating it
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator'); //plug in - usernames & emails have to be unique
var crypto = require('crypto');             //library for all cryptography algorithms
var jwt = require('jsonwebtoken');
var secret = require('../../config').secret;   //used to assign jwt tokens, secret code to sign all requests
var passport = require('passport');

//Define a schema = define data that goes into database

var UserSchema = new mongoose.Schema({   //new user object                                             match (regex) - only allows letters/numbers
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  image: String,    //url image
  hash: String,     //password representation encrypted
  salt: String      //used to hash password
}, {timestamps: true});   //will give dates (when created, last sign in, etc.)

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});   //checks unique

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function(password) { //10000 = ms time
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;    // === testing for true
}

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);    //jwt expires after 60 min

  return jwt.sign({   //sign the wt with id, username, exp date, & secret
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, secret);
}

UserSchema.methods.toAuthJSON = function(){   //returns when user logs in
  return {
    username: this.username,
    email: this.email,
    token: this.generationJWT(),
    image: this.image
  };
};

mongoose.model('User', UserSchema);
