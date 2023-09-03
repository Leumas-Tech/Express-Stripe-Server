const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/financial_connections/accounts/:id/inferred_balances', controller.listInferredBalances);


module.exports = router;
