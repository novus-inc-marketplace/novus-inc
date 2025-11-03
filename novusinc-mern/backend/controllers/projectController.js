const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (Admin)
const createProject = async (req, res) => {
  const { title, category, img, type, link } = req.body;

  if (!title || !category || !img || !type || !link) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const project = new Project({
      title,
      category,
      img,
      type,
      link,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(450).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject };
