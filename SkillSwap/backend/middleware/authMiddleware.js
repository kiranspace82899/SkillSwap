const jwt = require('jsonwebtoken');
const { User } = require('../models');

const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByPk(decoded.id);
      next();
    } catch (error) {
      return res.status(401).json({ msg: 'Invalid Token' });
    }
  } else {
    return res.status(401).json({ msg: 'No token provided' });
  }
};

module.exports = { protect };
