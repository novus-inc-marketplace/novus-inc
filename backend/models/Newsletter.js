const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
}, {
  timestamps: true,
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
