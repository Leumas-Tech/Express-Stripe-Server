const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create a new SetupIntent
router.post('/v1/setup_intents', controller.createSetupIntent);

// Retrieve a SetupIntent by ID
router.get('/v1/setup_intents/:id', controller.retrieveSetupIntent);

// Update a SetupIntent by ID
router.post('/v1/setup_intents/:id', controller.updateSetupIntent);

// Confirm a SetupIntent by ID
router.post('/v1/setup_intents/:id/confirm', controller.confirmSetupIntent);

// Cancel a SetupIntent by ID
router.post('/v1/setup_intents/:id/cancel', controller.cancelSetupIntent);

// List all SetupIntents
router.get('/v1/setup_intents', controller.listSetupIntents);

// Verify Microdeposits for a SetupIntent by ID
router.post('/v1/setup_intents/:id/verify_microdeposits', controller.verifyMicrodeposits);

module.exports = router;
