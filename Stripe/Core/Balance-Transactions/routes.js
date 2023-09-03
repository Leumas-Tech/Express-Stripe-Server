const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Retrieve a specific balance transaction
router.get('/v1/balance_transactions/:id', controller.retrieveBalanceTransaction);

// Retrieve a list of balance transactions
router.get('/v1/balance_transactions', controller.listBalanceTransactions);

module.exports = router;
