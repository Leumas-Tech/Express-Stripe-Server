const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// Issuing transactions endpoints
router.get('/v1/issuing/transactions/:id', controller.retrieveTransaction);
router.post('/v1/issuing/transactions/:id', controller.updateTransaction);
router.get('/v1/issuing/transactions', controller.listTransactions);



module.exports = router;
