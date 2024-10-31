const express = require('express');
const router = express.Router();
const keywordsController = require('../controllers/keywordsController');

router.get('/suggestions', keywordsController.getKeywordSuggestions);

module.exports = router;
