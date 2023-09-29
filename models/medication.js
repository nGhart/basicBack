const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: false },
  expiryDate: { type: String, required: true },
  supplier: { type: String, required: false },
});

const Med = mongoose.model('Med', medSchema);

module.exports = Med;
