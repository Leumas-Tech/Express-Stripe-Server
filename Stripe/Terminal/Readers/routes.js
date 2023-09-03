const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Terminal Readers
router.post('/v1/terminal/readers', controller.createReader);
router.get('/v1/terminal/readers/:id', controller.retrieveReader);
router.post('/v1/terminal/readers/:id', controller.updateReader);
router.delete('/v1/terminal/readers/:id', controller.deleteReader);
router.get('/v1/terminal/readers', controller.listReaders);
router.post('/v1/terminal/readers/:id/process_payment_intent', controller.processPaymentIntent);
router.post('/v1/terminal/readers/:id/process_setup_intent', controller.processSetupIntent);
router.post('/v1/terminal/readers/:id/set_reader_display', controller.setReaderDisplay);
router.post('/v1/terminal/readers/:id/refund_payment', controller.refundPayment);
router.post('/v1/terminal/readers/:id/cancel_action', controller.cancelReaderAction);
router.post('/v1/test_helpers/terminal/readers/:id/present_payment_method', controller.presentPaymentMethod);

module.exports = router;
