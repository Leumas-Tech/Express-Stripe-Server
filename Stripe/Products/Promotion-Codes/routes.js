const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/promotion_codes', controller.createPromotionCode);
router.get('/promotion_codes/:id', controller.getPromotionCode);
router.post('/promotion_codes/:id', controller.updatePromotionCode); // It may be more RESTful to use PUT here.
router.get('/promotion_codes', controller.listPromotionCodes);

module.exports = router;
