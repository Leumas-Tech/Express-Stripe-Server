const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/treasury/received_debits/:id', controller.retrieveReceivedDebit);
router.get('/v1/treasury/received_debits', controller.listReceivedDebits);
router.post('/v1/test_helpers/treasury/received_debits', controller.createReceivedDebitTest);

module.exports = router;
