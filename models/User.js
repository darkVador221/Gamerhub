const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', utilisateurSchema);