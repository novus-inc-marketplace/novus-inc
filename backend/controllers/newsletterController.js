const Newsletter = require('../models/Newsletter');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Please enter an email address' });
  }

  try {
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscriber = new Newsletter({
      email,
    });

    await newSubscriber.save();
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { subscribeNewsletter };
