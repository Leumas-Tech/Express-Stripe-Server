const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/financial_connections/accounts/:id', controller.retrieveAccount);
router.post('/v1/financial_connections/accounts/:id/refresh', controller.refreshAccount);
router.post('/v1/financial_connections/accounts/:id/subscribe', controller.subscribeAccount);
router.post('/v1/financial_connections/accounts/:id/unsubscribe', controller.unsubscribeAccount);
router.post('/v1/financial_connections/accounts/:id/disconnect', controller.disconnectAccount);
router.get('/v1/financial_connections/accounts', controller.listAccounts);


module.exports = router;
