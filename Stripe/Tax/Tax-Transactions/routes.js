const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/tax/transactions/create_from_calculation', controller.createFromCalculation);
router.post('/tax/transactions/create_reversal', controller.createReversal);
router.get('/tax/transactions/:id', controller.retrieveTransaction);
router.get('/tax/transactions/:id/line_items', controller.listTransactionLineItems);

module.exports = router;
