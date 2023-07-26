// movieModel.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },

});

module.exports = mongoose.model('movie', movieSchema);
