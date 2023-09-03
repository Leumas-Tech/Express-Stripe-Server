const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/customers/:customerId/cash_balance', controller.retrieveCustomerCashBalance);
router.post('/customers/:customerId/cash_balance', controller.updateCustomerCashBalance);
router.get('/customers/:customerId/cash_balance_transactions/:transactionId', controller.retrieveCustomerCashBalanceTransaction);
router.get('/customers/:customerId/cash_balance_transactions', controller.listCustomerCashBalanceTransactions);
router.post('/test_helpers/customers/:customerId/fund_cash_balance', controller.fundCustomerCashBalance);

module.exports = router;
