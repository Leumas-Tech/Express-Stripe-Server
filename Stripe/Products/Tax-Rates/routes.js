const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/tax_rates', controller.createTaxRate);
router.get('/tax_rates/:id', controller.getTaxRate);
router.post('/tax_rates/:id', controller.updateTaxRate);
router.get('/tax_rates', controller.listTaxRates);

module.exports = router;
