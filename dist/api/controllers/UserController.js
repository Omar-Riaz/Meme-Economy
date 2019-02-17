//CRUD
var passport = require("passport");
var mongoose = require("mongoose");
var User = mongoose.model('User');

//register controller
module.exports.register = function(req,res) {
  var user = new User();

  user.username = req.body.username;
  user.email = req.body.email;

  user.setPassword(String(req.body.password));
  user.save(function(err) {
    var token;

    token = user.generateJWT();
    res.status(200);
    res.json({ "token": token });
  });
};

//login authenitcation controller
module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    var token;
    //if passport gets an error
    if(err){
      res.status(404).json(err);
      return;
    }
    //if user is found
    if(user){
      token = user.generateJWT();
      res.status(200);
      res.json({ "token": token });
    }
    else {  //if user is not found
      res.status(401).json(info);
    }
  }) (req, res);
};

// function CreateUser(user, email, password){
//
// }
//
// module.export = CreateUser;
