const express = require('express');
const router = express.Router();
const reversalController = require('./controllers');

// Create a reversal
router.post('/v1/transfers/:transferId/reversals', reversalController.createReversal);

// Retrieve a specific reversal
router.get('/v1/transfers/:transferId/reversals/:reversalId', reversalController.retrieveReversal);

// Update a specific reversal
router.post('/v1/transfers/:transferId/reversals/:reversalId', reversalController.updateReversal);

// List all reversals for a given transfer
router.get('/v1/transfers/:transferId/reversals', reversalController.listReversals);

module.exports = router;
