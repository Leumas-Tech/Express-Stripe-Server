const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/customers/:customerId/add-to-customer', controller.addTaxIdToCustomer);


router.get('/v1/customers/:customerId/retrieve/:taxId', controller.retrieveTaxId);


router.delete('/v1/customers/:customerId/delete/:taxId', controller.deleteTaxId);


router.get('/v1/customers/:customerId/get', controller.listTaxIds);




module.exports = router;
