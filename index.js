const nodeyourmeme = require('nodeyourmeme');
const mongoose = require('mongoose');

//add 10 random memes to the db
let memes = [];
for(let i = 0; i < 10; i++){
  nodeyourmeme.random().then((value) => {
    console.log("added following meme to DB: " + value);
    memes.push(value);
  }, (err) => {
    console.log("what the fucc");
    console.log(err);
  });
}
mongoose.connect('mongodb://<OmarRiaz75035>:<Dash@12Banana>@ds237955.mlab.com:37955/memeql');

//populate the database with the memes
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;
const MemeSchema = new Schema({
  id: ObjectId,
  base: String
});

const MemeModel = mongoose.model('MemeModel', MemeSchema);

//turn all memes into models
let memesModels = memes.map(meme =>
  new MemeModel({
    base: meme.name
  })
);

//save models into DB
MemeModel.collection.insert(memeModels);
