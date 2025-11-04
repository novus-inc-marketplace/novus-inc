const Team = require('../models/Team');

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
const getTeam = async (req, res) => {
  try {
    const team = await Team.find({});
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a team member
// @route   POST /api/team
// @access  Private (Admin)
const createTeamMember = async (req, res) => {
  const { name, position, image, facebook, twitter, instagram, linkedin } = req.body;

  if (!name || !position || !image) {
    return res.status(400).json({ message: 'Please enter all required fields (name, position, image)' });
  }

  try {
    const teamMember = new Team({
      name,
      position,
      image,
      facebook,
      twitter,
      instagram,
      linkedin,
    });

    const createdTeamMember = await teamMember.save();
    res.status(201).json(createdTeamMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTeam, createTeamMember };
