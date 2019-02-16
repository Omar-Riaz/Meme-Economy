var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/user'), //created model loading here
  bodyParser = require('body-parser');

  // // mongoose instance connection url connection
  // mongoose.Promise = global.Promise;
  // mongoose.connect('mongodb://localhost/meme-economy');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('./api/routes'));

app.listen(PORT, () => {
  console.log(`I'll be right by your side till port ${PORT}`)
});
