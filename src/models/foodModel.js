const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  id:{
    type: String,
    required:true,
    unique:true
  },
  name:{
    type: String,
    required:true
  },
  category: {
    type: String,
    required:true
  },
  quantify:{
    type: Number,
    required:true
  },
  expirationDate:{
    type: Date,
    required:true
  },
  price:{
    type: Number,
    required:true
  }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;