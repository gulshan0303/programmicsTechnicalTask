const express = require('express');
const router = express.Router();
const { addImage } = require('../controller/imageController');

// POST /api/images/:id/like
router.post('/:id/like', addImage);

module.exports = router;