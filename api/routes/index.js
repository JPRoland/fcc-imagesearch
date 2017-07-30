const express = require('express');
const router = express.Router();
const searchController = require('../search/search');

router.get('/imagesearch/:search', searchController.search);

router.get('/latest', searchController.getLatest);

module.exports = router;