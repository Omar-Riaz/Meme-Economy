var express = require('express');
var app = express();
var port = process.env.PORT || 3005;

var apiRoutes = require('./api/Routes');

app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log("I'll be right by your side till port " + port);
});
