const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  payment: {
    type: String,
    required: false,
  },
  transactionType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
