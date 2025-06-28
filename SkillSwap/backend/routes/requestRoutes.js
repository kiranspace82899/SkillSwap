const express = require('express');
const router = express.Router();
const { sendRequest, acceptRequest } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');

router.post('/send', protect, sendRequest);
router.put('/accept/:id', protect, acceptRequest);

module.exports = router;
