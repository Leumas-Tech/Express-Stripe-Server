const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create a financial account
router.post('/v1/treasury/financial_accounts', controller.createFinancialAccount);

// Update a financial account
router.post('/v1/treasury/financial_accounts/:id', controller.updateFinancialAccount);

// Retrieve a specific financial account
router.get('/v1/treasury/financial_accounts/:id', controller.retrieveFinancialAccount);

// List financial accounts
router.get('/v1/treasury/financial_accounts', controller.listFinancialAccounts);

module.exports = router;
