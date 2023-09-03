const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/v1/identity/verification_sessions', controller.createVerificationSession);
router.get('/v1/identity/verification_sessions', controller.listVerificationSessions);
router.get('/v1/identity/verification_sessions/:id', controller.retrieveVerificationSession);
router.post('/v1/identity/verification_sessions/:id', controller.updateVerificationSession);
router.post('/v1/identity/verification_sessions/:id/cancel', controller.cancelVerificationSession);
router.post('/v1/identity/verification_sessions/:id/redact', controller.redactVerificationSession);



module.exports = router;
