var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MemeSchema = new Schema({
  title: String,
  image: String,
  bid: Number,
  ask: Number
}, {timestamps: true});

mongoose.model('Meme', MemeSchema);
