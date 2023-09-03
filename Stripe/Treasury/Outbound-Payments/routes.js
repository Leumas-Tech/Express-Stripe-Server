const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/treasury/outbound_payments', controller.createOutboundPayment);
router.post('/v1/treasury/outbound_payments/:id/cancel', controller.cancelOutboundPayment);
router.get('/v1/treasury/outbound_payments/:id', controller.retrieveOutboundPayment);
router.get('/v1/treasury/outbound_payments', controller.listOutboundPayments);
router.post('/v1/test_helpers/treasury/outbound_payments/:id/post', controller.postTestHelperOutboundPayment);
router.post('/v1/test_helpers/treasury/outbound_payments/:id/return', controller.returnTestHelperOutboundPayment);
router.post('/v1/test_helpers/treasury/outbound_payments/:id/fail', controller.failTestHelperOutboundPayment);

module.exports = router;
