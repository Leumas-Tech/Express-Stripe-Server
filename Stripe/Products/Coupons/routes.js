const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/coupons', controller.createCoupon);
router.get('/coupons/:id', controller.retrieveCoupon);
router.post('/coupons/:id', controller.updateCoupon);
router.delete('/coupons/:id', controller.deleteCoupon);
router.get('/coupons', controller.listCoupons);

module.exports = router;
