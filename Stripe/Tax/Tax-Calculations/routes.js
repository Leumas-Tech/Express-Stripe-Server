const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/tax/calculations', controller.createTaxCalculation);
router.get('/tax/calculations/:id/line_items', controller.listTaxCalculationLineItems);

module.exports = router;
