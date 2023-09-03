const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create customer source
router.post('/customers/:customerId/sources', controller.createCustomerSource);

// Retrieve a specific customer source by its ID
router.get('/customers/:customerId/sources/:sourceId', controller.retrieveCustomerSource);

// Update a specific customer source by its ID
router.put('/customers/:customerId/sources/:sourceId', controller.updateCustomerSource);

// Verify a specific customer source by its ID
router.post('/customers/:customerId/sources/:sourceId/verify', controller.verifyCustomerSource);

// Delete a specific customer source by its ID
router.delete('/customers/:customerId/sources/:sourceId', controller.deleteCustomerSource);

// List all sources for a customer
router.get('/customers/:customerId/sources', controller.listCustomerSources);

module.exports = router;
