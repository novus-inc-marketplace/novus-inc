const express = require('express');
const router = express.Router();
const { getTeam, createTeamMember } = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getTeam).post(protect, createTeamMember);

module.exports = router;
