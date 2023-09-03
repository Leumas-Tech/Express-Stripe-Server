const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/treasury/transactions/:id', controller.retrieveTransaction);
router.get('/v1/treasury/transactions', controller.listTransactions);

module.exports = router;
