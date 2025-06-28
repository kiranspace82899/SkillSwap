const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /register
exports.registerUser = async (req, res) => {
  const { name, email, password, skillsHave, skillsWant } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPass,
      skillsHave,
      skillsWant
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ msg: 'User registered successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// POST /login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ msg: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
// GET /profile
exports.getUserProfile = async (req, res) => {
  const { id, name, email, skillsHave, skillsWant } = req.user;
  res.json({ id, name, email, skillsHave, skillsWant });
};

// GET /match
const { Op } = require('sequelize');

exports.findMatches = async (req, res) => {
  const currentUser = req.user;
  const skillsWanted = currentUser.skillsWant?.split(',').map(skill => skill.trim().toLowerCase()) || [];

  try {
    const otherUsers = await User.findAll({
      where: {
        id: { [Op.ne]: currentUser.id }
      }
    });

    const matches = otherUsers.filter(user => {
      const theirSkills = user.skillsHave?.split(',').map(skill => skill.trim().toLowerCase()) || [];
      return skillsWanted.some(skill => theirSkills.includes(skill));
    });

    res.json(matches.slice(0, 5));
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Matchmaking error', err });
  }
};
