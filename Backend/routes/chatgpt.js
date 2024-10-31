const express = require('express');
const router = express.Router();
const chatgptController = require('../controllers/chatgptController');
const auth = require('../middleware/auth');
const subscriptionCheck = require('../middleware/subscriptionCheck');

router.post('/generateIdeas', auth, subscriptionCheck('lite'), chatgptController.generateIdeas);
router.post('/generateSEOTips', auth, subscriptionCheck('lite'), chatgptController.generateSEOTips);

module.exports = router;
