const { Chat } = require('../models');

exports.sendMessage = async (req, res) => {
  const from = req.user.id;
  const { to, message } = req.body;

  try {
    const newMsg = await Chat.create({ from, to, message });
    res.json({ msg: 'Message sent!', newMsg });
  } catch (err) {
    res.status(500).json({ msg: 'Message error', err });
  }
};


const { Op } = require('sequelize');

exports.getChatHistory = async (req, res) => {
  const userId = req.user.id;
  const partnerId = req.params.partnerId;

  try {
    const messages = await Chat.findAll({
      where: {
        [Op.or]: [
          { from: userId, to: partnerId },
          { from: partnerId, to: userId }
        ]
      },
      order: [["timestamp", "ASC"]]
    });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Chat fetch error', err });
  }
};



