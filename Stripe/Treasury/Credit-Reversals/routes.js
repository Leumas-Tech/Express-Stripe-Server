const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Create a treasury credit reversal
router.post('/v1/treasury/credit_reversals', controller.createCreditReversal);

// Retrieve a specific treasury credit reversal
router.get('/v1/treasury/credit_reversals/:id', controller.retrieveCreditReversal);

// List all treasury credit reversals
router.get('/v1/treasury/credit_reversals', controller.listCreditReversals);

module.exports = router;
