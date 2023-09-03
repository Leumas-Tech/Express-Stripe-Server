const express = require('express');
const router = express.Router();
const controller = require('./controllers');



router.post('/customers/:customerId/balance-transactions', controller.createBalanceTransaction);

router.get('/customers/:customerId/balance-transactions/:transactionId', controller.retrieveBalanceTransaction);

router.put('/customers/:customerId/balance-transactions/:transactionId', controller.updateBalanceTransaction);

router.get('/customers/:customerId/balance-transactions', controller.listBalanceTransactions);



module.exports = router;
