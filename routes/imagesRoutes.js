const express = require('express');
const router = express.Router();
const { clickImage } = require('../controller/imageController');

// POST /api/images/:id/like
router.post('/click', clickImage);

module.exports = router;