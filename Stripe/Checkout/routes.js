const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/checkout/sessions', controller.createCheckoutSession);
router.post('/v1/checkout/sessions/:id/expire', controller.expireCheckoutSession);
router.get('/v1/checkout/sessions/:id', controller.retrieveCheckoutSession);
router.get('/v1/checkout/sessions', controller.listCheckoutSessions);
router.get('/v1/checkout/sessions/:id/line_items', controller.listCheckoutSessionLineItems);

module.exports = router;
