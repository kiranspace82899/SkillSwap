const { Request } = require('../models');

exports.sendRequest = async (req, res) => {
  const fromUserId = req.user.id;
  const { toUserId } = req.body;

  try {
    const newReq = await Request.create({ fromUserId, toUserId });
    res.json({ msg: 'Request sent!', newReq });
  } catch (err) {
    res.status(500).json({ msg: 'Send error', err });
  }
};

exports.acceptRequest = async (req, res) => {
  const requestId = req.params.id;

  try {
    const reqToUpdate = await Request.findByPk(requestId);
    if (!reqToUpdate) return res.status(404).json({ msg: 'Request not found' });

    reqToUpdate.status = 'accepted';
    await reqToUpdate.save();

    res.json({ msg: 'Request accepted!', reqToUpdate });
  } catch (err) {
    res.status(500).json({ msg: 'Accept error', err });
  }
};
