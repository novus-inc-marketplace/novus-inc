const Testimonial = require('../models/Testimonial');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private (Admin)
const createTestimonial = async (req, res) => {
  const { quote, clientName, clientProfession, clientImage } = req.body;

  if (!quote || !clientName || !clientProfession || !clientImage) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const testimonial = new Testimonial({
      quote,
      clientName,
      clientProfession,
      clientImage,
    });

    const createdTestimonial = await testimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTestimonials, createTestimonial };
