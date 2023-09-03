const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create an inbound transfer
router.post('/v1/treasury/inbound_transfers', controller.createInboundTransfer);

// Cancel an inbound transfer
router.post('/v1/treasury/inbound_transfers/:id/cancel', controller.cancelInboundTransfer);

// Retrieve a specific inbound transfer
router.get('/v1/treasury/inbound_transfers/:id', controller.retrieveInboundTransfer);

// List inbound transfers
router.get('/v1/treasury/inbound_transfers', controller.listInboundTransfers);

// Test helpers for inbound transfers
router.post('/v1/test_helpers/treasury/inbound_transfers/:id/fail', controller.failInboundTransfer);
router.post('/v1/test_helpers/treasury/inbound_transfers/:id/return', controller.returnInboundTransfer);
router.post('/v1/test_helpers/treasury/inbound_transfers/:id/succeed', controller.succeedInboundTransfer);

module.exports = router;
