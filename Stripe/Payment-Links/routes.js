const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Payment links endpoints
router.post('/v1/payment_links', controller.createPaymentLink);
router.get('/v1/payment_links/:id', controller.retrievePaymentLink);
router.post('/v1/payment_links/:id', controller.updatePaymentLink);
router.get('/v1/payment_links', controller.listPaymentLinks);
router.get('/v1/payment_links/:id/line_items', controller.listLineItemsPaymentLink);

module.exports = router;
