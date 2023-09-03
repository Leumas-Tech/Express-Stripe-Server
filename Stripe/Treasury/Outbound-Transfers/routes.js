const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/treasury/outbound_transfers', controller.createOutboundTransfer);
router.post('/v1/treasury/outbound_transfers/:id/cancel', controller.cancelOutboundTransfer);
router.get('/v1/treasury/outbound_transfers/:id', controller.retrieveOutboundTransfer);
router.get('/v1/treasury/outbound_transfers', controller.listOutboundTransfers);
router.post('/v1/test_helpers/treasury/outbound_transfers/:id/post', controller.postOutboundTransferTest);
router.post('/v1/test_helpers/treasury/outbound_transfers/:id/return', controller.returnOutboundTransferTest);
router.post('/v1/test_helpers/treasury/outbound_transfers/:id/fail', controller.failOutboundTransferTest);

module.exports = router;
