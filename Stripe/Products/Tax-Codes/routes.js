const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/tax_codes', controller.listTaxCodes);
router.get('/tax_codes/:id', controller.getTaxCode);

module.exports = router;
