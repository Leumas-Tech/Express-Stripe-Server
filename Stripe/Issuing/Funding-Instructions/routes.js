const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Issuing funding instructions endpoints
router.post('/v1/issuing/funding_instructions', controller.createFundingInstructions);
router.get('/v1/issuing/funding_instructions', controller.listFundingInstructions);
router.post('/v1/test_helpers/issuing/fund_balance', controller.fundBalance);

module.exports = router;
