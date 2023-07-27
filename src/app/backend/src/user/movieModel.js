const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: './userModel' // This should match the model name of your User model
  }
});
module.exports = mongoose.model('save', movieSchema);