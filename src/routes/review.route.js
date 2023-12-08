const express = require('express');
const router = express.Router();
const reviewCT = require('../controllers/review.controller')

router.route('/review')
    .post(reviewCT.createReviews)

module.exports = router;