const nodeyourmeme = require('nodeyourmeme');
const mongoose = require('mongoose');

//get 10 ranom memes
let randomMemePromises = [];
for(let i = 0; i < 10; i++){
  randomMemePromises.push(nodeyourmeme.random());
}

//save models into DB
Promise.all(randomMemePromises).then((memes)=>{
  var db_connection_string = "mongodb://Omar:dash1234@ds237955.mlab.com:37955/memeql";
  mongoose.connect(db_connection_string, {useNewUrlParser: true});
  //populate the database with the memes
  const Schema = mongoose.Schema;

  const ObjectId = Schema.ObjectId;
  const MemeSchema = new Schema({
    id: ObjectId,
    base: String
  });

  const MemeModel = mongoose.model('MemeModel', MemeSchema);
  //turn all memes into models
  let memeModels = memes.map(meme =>
    new MemeModel({
      base: meme.name
    })
  );

  MemeModel.collection.insertMany(memeModels, function (err, docs) {
    if (err){
        console.error("error occured:" + err);
    } else {
      console.log("Multiple documents inserted to Collection");
    };
  });

});
