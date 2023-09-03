const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/treasury/received_credits/:id', controller.retrieveReceivedCredit);
router.get('/v1/treasury/received_credits', controller.listReceivedCredits);
router.post('/v1/test_helpers/treasury/received_credits', controller.createReceivedCreditTest);

module.exports = router;
