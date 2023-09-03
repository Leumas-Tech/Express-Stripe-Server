const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/treasury/transaction_entries/:id', controller.retrieveTransactionEntry);
router.get('/v1/treasury/transaction_entries', controller.listTransactionEntries);

module.exports = router;
