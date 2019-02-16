'use strict';

var nodeyourmeme = require('nodeyourmeme');
var mongoose = require('mongoose');

//add 10 random memes to the db
var memes = [];
for (var i = 0; i < 10; i++) {
  nodeyourmeme.random().then(function (value) {
    console.log("added following meme to DB: " + value);
    memes.push(value);
  }, function (err) {
    console.log("what the fucc");
    console.log(err);
  });
}
mongoose.connect('mongodb://<OmarRiaz75035>:<Dash@12Banana>@ds237955.mlab.com:37955/memeql');

//populate the database with the memes
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;
var MemeSchema = new Schema({
  id: ObjectId,
  base: String
});

var MemeModel = mongoose.model('MemeModel', MemeSchema);

//turn all memes into models
var memesModels = memes.map(function (meme) {
  return new MemeModel({
    base: meme.name
  });
});

//save models into DB
MemeModel.collection.insert(memeModels);