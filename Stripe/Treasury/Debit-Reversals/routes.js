const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create a treasury debit reversal
router.post('/v1/treasury/debit_reversals', controller.createDebitReversal);

// Retrieve a specific treasury debit reversal
router.get('/v1/treasury/debit_reversals/:id', controller.retrieveDebitReversal);

// List all treasury debit reversals
router.get('/v1/treasury/debit_reversals', controller.listDebitReversals);

module.exports = router;
