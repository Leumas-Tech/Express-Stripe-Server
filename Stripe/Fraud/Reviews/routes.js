const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/reviews/:id/approve', controller.approveReview);
router.get('/v1/reviews/:id', controller.getReviewById);
router.get('/v1/reviews', controller.getAllReviews);


module.exports = router;
