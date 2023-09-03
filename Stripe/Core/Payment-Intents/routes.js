const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/payment_intents', controller.create);
router.get('/v1/payment_intents/:id', controller.retrieve);
router.post('/v1/payment_intents/:id', controller.update);
router.post('/v1/payment_intents/:id/confirm', controller.confirm);
router.post('/v1/payment_intents/:id/capture', controller.capture);
router.post('/v1/payment_intents/:id/cancel', controller.cancel);
router.get('/v1/payment_intents', controller.list);
router.post('/v1/payment_intents/:id/increment_authorization', controller.incrementAuthorization);
router.get('/v1/payment_intents/search', controller.search);
router.post('/v1/payment_intents/:id/verify_microdeposits', controller.verifyMicrodeposits);
router.post('/v1/payment_intents/:id/apply_customer_balance', controller.applyCustomerBalance);

module.exports = router;
