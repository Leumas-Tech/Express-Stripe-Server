const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/customers/:customerId/sources', controller.createCustomerSource);
router.get('/customers/:customerId/sources/:sourceId', controller.retrieveCustomerSource);
router.post('/customers/:customerId/sources/:sourceId', controller.updateCustomerSource);
router.delete('/customers/:customerId/sources/:sourceId', controller.deleteCustomerSource);
router.get('/customers/:customerId/sources', controller.listCustomerSources);

module.exports = router;
