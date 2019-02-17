//entrypoint of app, initializations
var express = require('express'); //produces http
var passport = require("passport");
var app = express();
var port = process.env.PORT || 3005;
var bodyParser = require("body-parser");

//require('./api/models/db');
require('./api/passport');

//initialize passport as express middleware
app.use(passport.initialize());

var apiRoutes = require('./api/Routes');
app.use('/api', apiRoutes);   //telling app to use all these routes for inputs

// //tell express to use passport
// app.use(passport.initialize());
// app.use(passport.session());

// //error handler
// app.use(function (err, req, res, next) {
//   if(err.name === 'UnauthorizedError') {
//     res.status(401);
//     res.json({ "message": err.name + ": " + err.message });
//   }
// });

app.listen(port, function() {
  console.log("I'll be right by your side till port " + port);
});
