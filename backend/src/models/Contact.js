// models/Contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  postalcode: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
