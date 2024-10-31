const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');

router.get('/search', youtubeController.searchVideos);
router.get('/stats', youtubeController.getVideoStats);

module.exports = router;
