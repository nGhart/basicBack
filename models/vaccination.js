const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  medication: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  nextDate: {
    type: Number,
    required: true,
  },
});

const Vaccination = mongoose.model('Vaccination', vaccinationSchema);

module.exports = Vaccination;
