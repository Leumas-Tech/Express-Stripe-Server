const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/customers', controller.createCustomer);
router.get('/v1/customers/:id', controller.retrieveCustomer);
router.post('/v1/customers/:id', controller.updateCustomer);
router.delete('/v1/customers/:id', controller.deleteCustomer);
router.get('/v1/customers', controller.listCustomers);
router.get('/v1/customers/search', controller.searchCustomers);

module.exports = router;
