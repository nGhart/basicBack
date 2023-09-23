const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: false },
  contactNumber: { type: String, required: false },
  contactGroup: { type: String, required: false },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
