'use strict';

var nodeyourmeme = require('nodeyourmeme');
var mongoose = require('mongoose');

//get 10 ranom memes
var randomMemePromises = [];
for (var i = 0; i < 10; i++) {
  randomMemePromises.push(nodeyourmeme.random());
}

//save models into DB
Promise.all(randomMemePromises).then(function (memes) {
  var db_connection_string = "mongodb://Omar:dash1234@ds237955.mlab.com:37955/memeql";
  mongoose.connect(db_connection_string, { useNewUrlParser: true });
  //populate the database with the memes
  var Schema = mongoose.Schema;

  var ObjectId = Schema.ObjectId;
  var MemeSchema = new Schema({
    id: ObjectId,
    base: String
  });

  var MemeModel = mongoose.model('MemeModel', MemeSchema);
  //turn all memes into models
  var memeModels = memes.map(function (meme) {
    return new MemeModel({
      base: meme.name
    });
  });

  MemeModel.collection.insertMany(memeModels, function (err, docs) {
    if (err) {
      console.error("error occured:" + err);
    } else {
      console.log("Multiple documents inserted to Collection");
    };
  });
});