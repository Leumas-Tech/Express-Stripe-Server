const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/application_fees/:fee_id/refunds', controller.createFeeRefund);
router.get('/v1/application_fees/:fee_id/refunds/:refund_id', controller.retrieveFeeRefund);
router.post('/v1/application_fees/:fee_id/refunds/:refund_id', controller.updateFeeRefund);
router.get('/v1/application_fees/:fee_id/refunds', controller.listFeeRefunds);

module.exports = router;
