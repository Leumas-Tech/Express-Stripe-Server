const express = require('express');
const router = express.Router();
const transferController = require('./controllers');

// Create a transfer
router.post('/v1/transfers', transferController.createTransfer);

// Retrieve a specific transfer
router.get('/v1/transfers/:id', transferController.retrieveTransfer);

// Update a specific transfer
router.post('/v1/transfers/:id', transferController.updateTransfer);

// List all transfers
router.get('/v1/transfers', transferController.listTransfers);

module.exports = router;
