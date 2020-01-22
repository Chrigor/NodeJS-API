const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id:Number,
  name: String,
  description: String,
  price: Number,
  imagem64: String
})

module.exports = mongoose.model('Product', ProductSchema);