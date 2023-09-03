const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/accounts', controller.createAccount);
router.get('/v1/accounts/:id', controller.retrieveAccount);
router.post('/v1/accounts/:id', controller.updateAccount);
router.delete('/v1/accounts/:id', controller.deleteAccount);
router.post('/v1/accounts/:id/reject', controller.rejectAccount);
router.get('/v1/accounts', controller.listAccounts);
router.post('/v1/accounts/:id/login_links', controller.createLoginLink);

module.exports = router;
