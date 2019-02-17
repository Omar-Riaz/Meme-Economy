//entrypoint of app, initializations
var express = require('express'); //produces http
var path = require('path');
var app = express();
var port = process.env.PORT || 3005;
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var passport = require("passport");
var cors = require('cors');

require('./api/models/db');
require('./api/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//initialize passport as express middleware
app.use(passport.initialize());

var apiRoutes = require('./api/Routes');
app.use('/api', apiRoutes);   //telling app to use all these routes for inputs

app.listen(port, function() {
  console.log("I'll be right by your side till port " + port);
});
