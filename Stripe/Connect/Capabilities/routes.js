const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/v1/accounts/:account_id/capabilities/:capability_id', controller.retrieveCapability);
router.post('/v1/accounts/:account_id/capabilities/:capability_id', controller.updateCapability);
router.get('/v1/accounts/:account_id/capabilities', controller.listCapabilities);

module.exports = router;
