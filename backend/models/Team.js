const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    default: '#',
  },
  twitter: {
    type: String,
    default: '#',
  },
  instagram: {
    type: String,
    default: '#',
  },
  linkedin: {
    type: String,
    default: '#',
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
