const express = require('express');
const router = express.Router();
const trendsController = require('../controllers/trendsController');

router.get('/getTrends', trendsController.getTrends);

module.exports = router;
