const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Update features of a financial account
router.post('/v1/treasury/financial_accounts/:id/features', controller.updateFinancialAccountFeatures);

// Retrieve features of a financial account
router.get('/v1/treasury/financial_accounts/:id/features', controller.retrieveFinancialAccountFeatures);

module.exports = router;
