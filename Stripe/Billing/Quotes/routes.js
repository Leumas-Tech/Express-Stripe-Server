const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/quotes', controller.createQuote);
router.get('/v1/quotes/:id', controller.retrieveQuote);
router.post('/v1/quotes/:id', controller.updateQuote);
router.post('/v1/quotes/:id/finalize', controller.finalizeQuote);
router.post('/v1/quotes/:id/accept', controller.acceptQuote);
router.post('/v1/quotes/:id/cancel', controller.cancelQuote);
router.get('/v1/quotes/:id/pdf', controller.getPdf);
router.get('/v1/quotes/:id/line_items', controller.listLineItems);
router.get('/v1/quotes/:id/computed_upfront_line_items', controller.listComputedUpfrontLineItems);
router.get('/v1/quotes', controller.listQuotes);

module.exports = router;
