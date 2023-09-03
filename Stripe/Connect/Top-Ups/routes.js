const express = require('express');
const router = express.Router();
const topupController = require('./controllers');

// Create a topup
router.post('/v1/topups', topupController.createTopup);

// Retrieve a specific topup
router.get('/v1/topups/:id', topupController.retrieveTopup);

// Update a specific topup
router.post('/v1/topups/:id', topupController.updateTopup);

// List all topups
router.get('/v1/topups', topupController.listTopups);

// Cancel a topup
router.post('/v1/topups/:id/cancel', topupController.cancelTopup);

module.exports = router;
