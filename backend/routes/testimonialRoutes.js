const express = require('express');
const router = express.Router();
const { getTestimonials, createTestimonial } = require('../controllers/testimonialController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getTestimonials).post(protect, createTestimonial);

module.exports = router;
