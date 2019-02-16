var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MemeSchema = new Schema({
  title: String,
  image: String,
  buy: Number,
  sell: Number
}, {timestamps: true});
