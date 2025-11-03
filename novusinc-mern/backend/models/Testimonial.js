const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientProfession: {
    type: String,
    required: true,
    trim: true,
  },
  clientImage: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
