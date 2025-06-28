const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

const { User } = require('../models');

router.get('/test', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching users', err });
  }
});


router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
const { protect } = require('../middleware/authMiddleware');
const { getUserProfile, findMatches } = require('../controllers/userController');

router.get('/profile', protect, getUserProfile);
router.get('/match', protect, findMatches);
