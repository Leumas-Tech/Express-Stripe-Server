const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/financial_connections/transactions', controller.getTransactions);


module.exports = router;
